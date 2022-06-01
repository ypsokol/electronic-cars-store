type Props = {
  title: string;
};

const Link = ({ title }: Props) => {
  return (
    <li>
      <a href="components/Layout/Footer/Footer#" className="footer__link">
        {title}
      </a>
    </li>
  );
};

export default Link;
