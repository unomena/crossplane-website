/* eslint-disable react-hooks/exhaustive-deps */

import { debounce } from 'lodash';
import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';

/**
 * Set up some state and scroll handlers for the mobile carousel
 * @returns Carousel state and handlers
 */
export function useCarousel(
  names: Array<string>,
  data: Array<{
    header: string;
    data: [
      string | boolean,
      string | boolean,
      string | boolean,
      string | boolean,
      string | boolean
    ][];
  }>
) {
  const [column, setColumn] = useState(0);
  const [currentHeading, setCurrentHeading] = useState(0);
  const refs = useMemo<Array<React.RefObject<HTMLHeadingElement>>>(() => {
    return Array(data.length - 1)
      .fill(null)
      .map(() => createRef());
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const newHeading =
        refs
          .map((r, i) => [r.current?.getBoundingClientRect().top, i])
          .find(([s]) => (s ?? 0) > 120)?.[1] ?? refs.length;
      setCurrentHeading(newHeading);
    });

    document.body.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leftButtonEnabled = column > 0;
  const onLeftButton = () => {
    if (leftButtonEnabled) {
      setColumn((c) => c - 1);
    }
  };

  const rightButtonEnabled = column < names.length - 1;
  const onRightButton = () => {
    if (rightButtonEnabled) {
      setColumn((c) => c + 1);
    }
  };

  return {
    column,
    currentHeading,
    buttons: {
      leftEnabled: leftButtonEnabled,
      rightEnabled: rightButtonEnabled,
      onRight: onRightButton,
      onLeft: onLeftButton,
      refs,
    },
  };
}

export function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useExpandable() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!isExpanded) {
      if (contentHeight !== 0) {
        setContentHeight(0);
        return;
      }

      return;
    }

    if (!contentRef || !contentRef.current || !contentRef.current.scrollHeight) {
      return;
    }

    setContentHeight(contentRef.current.scrollHeight);
  }, [isExpanded, contentRef]);

  return { isExpanded, setExpanded, contentRef, contentHeight };
}
