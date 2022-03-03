import React, { useEffect, useRef, useState } from 'react';
import { Popover as TinyPopover, PopoverProps as TinyPopoverProps } from 'react-tiny-popover';

import { TIMING } from '../constants/timing';
import { useDebounce } from '../utils/hooks';
import { Anchor } from './Anchor';

const Popover: React.FC<
  Omit<TinyPopoverProps, 'content' | 'children' | 'isOpen' | 'onClickOutside'> & {
    children: [React.ReactNode, React.ReactNode] | React.ReactNode;
    className?: string;
  }
> = ({ children, className, ...props }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isOpen, setOpen] = useState(false);
  const isOpenDelayed200ms = useDebounce(isOpen, 200);
  const [linkChildren, ...contentChildren] = React.Children.toArray(children);

  useEffect(() => {
    if (containerRef.current !== null) {
      return;
    }

    const containerElement = document.getElementById('page-container');

    if (containerElement === null) {
      containerRef.current = document.body;
      return;
    }

    containerRef.current = containerElement;
  }, [containerRef]);

  if (typeof window === 'undefined' || containerRef.current === null) {
    return (
      <Anchor
        bold={true}
        className={className}
        onClick={event => {
          event.preventDefault();
          setOpen(true);
        }}
      >
        {linkChildren}
      </Anchor>
    );
  }

  return (
    <TinyPopover
      containerStyle={{
        zIndex: '200',
        overflow: 'visible',
        opacity: isOpen ? '1' : '0',
        transition: `opacity ${TIMING.normal('string')} ease-in-out`,
      }}
      containerParent={containerRef.current}
      content={<React.Fragment>{contentChildren}</React.Fragment>}
      {...props}
      isOpen={isOpen || isOpenDelayed200ms}
      onClickOutside={() => setOpen(false)}
    >
      <Anchor
        bold={true}
        className={className}
        onClick={event => {
          event.preventDefault();
          setOpen(true);
        }}
      >
        {linkChildren}
      </Anchor>
    </TinyPopover>
  );
};

export { Popover };
