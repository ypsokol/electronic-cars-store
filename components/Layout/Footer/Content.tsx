import { PropsWithChildren } from "react";
import Link from "./Link";

type Props = {
  title: string;
  links?: string[];
};

const Content = ({ title, links, children }: PropsWithChildren<Props>) => {
  return (
    <div className="footer__content">
      <h3 className="footer__title">{title}</h3>

      <ul className="footer__links">
        {links?.map((item, i) => (
          <Link key={i} title={item} />
        ))}
      </ul>
      {children}
    </div>
  );
};

export default Content;
