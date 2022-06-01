import NextImage, { StaticImageData } from "next/image";

type Props = {
  className: string;
  src: string | StaticImageData;
  [props: string]: any;
};

const Image = ({ className, src, ...props }: Props) => {
  return (
    <div className={className}>
      <NextImage src={src} {...props} />
    </div>
  );
};

export default Image;
