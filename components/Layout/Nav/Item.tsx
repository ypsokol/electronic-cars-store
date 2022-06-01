type Props = {
  href: string;
  title: string;
  onClick?: () => void;
};

const Item = ({ href, title, onClick }: Props) => {
  return (
    <li className="nav__menu-item">
      <a href={href} className="nav__menu-link" onClick={onClick}>
        {title}
      </a>
    </li>
  );
};

export default Item;
