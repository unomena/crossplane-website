import { useEffect, useRef, useState } from 'react';

const useOnScreen = (ref: { current?: Element }) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    if (ref?.current && observer?.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer?.current) {
        observer.current.disconnect();
      }
    };
  }, [ref]);

  return isIntersecting;
};

export default useOnScreen;
