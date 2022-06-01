import { useEffect, useState } from "react";

type ScrollState = {
  scrollX: number;
  scrollY: number;
};

export const useWindowScrollPositions = (limit: number = 200) => {
  const [scrollPosition, setPosition] = useState<ScrollState>({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
    };
    const throttle = (callback: any) => {
      let tick = false;
      return () => {
        if (!tick) {
          callback.call();
          tick = true;
          setTimeout(() => {
            tick = false;
          }, limit);
        }
      };
    };

    const throttledScroll = throttle(updatePosition);

    window.addEventListener("scroll", throttledScroll);
    throttledScroll();

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [limit]);

  return scrollPosition;
};
