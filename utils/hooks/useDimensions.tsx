import { useLayoutEffect, useRef, useState } from "react";

export const useDimensions = () => {
  const ref = useRef();
  const [dimensions, setDimensions] = useState();

  useLayoutEffect(() => {
    // @ts-ignore
    setDimensions(ref.current.getBoundingClientReact().toJSON());
  }, [ref]);

  return [ref, dimensions];
};
