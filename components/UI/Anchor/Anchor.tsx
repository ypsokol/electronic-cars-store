import { RiArrowUpLine } from "react-icons/ri";
import { useWindowScrollPositions } from "../../../utils/hooks/useWindowsScrollPosition";
import { Sections } from "../../../constants/routes";

const Anchor = () => {
  const { scrollY } = useWindowScrollPositions();

  const isVisible = scrollY > 400;
  const makeVisible = isVisible && "anchor-visible";

  return (
    <a href={`#${Sections.home}`} className={`anchor ${makeVisible}`}>
      <RiArrowUpLine />
    </a>
  );
};

export default Anchor;
