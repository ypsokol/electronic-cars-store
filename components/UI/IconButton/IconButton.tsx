import { PropsWithChildren } from "react";

type Props = {
  props?: HTMLButtonElement;
};

const IconButton = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <button className="btn__icon" {...props}>
      {children}
    </button>
  );
};

export default IconButton;
