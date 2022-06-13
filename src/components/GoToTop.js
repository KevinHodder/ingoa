import { FaChevronCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./GoToTop.css";

const GoToTop = (props) => {
  const { goToElem, appearAt } = props;
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const showButtonAt = appearAt || 400;
    window.addEventListener("scroll", () => {
      if (window.scrollY > showButtonAt) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    if (goToElem) {
      goToElem.current.scrollIntoView();
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return showTopBtn ? (
    <div onClick={goToTop} className={"top-to-btm"}>
      <FaChevronCircleUp className="icon-position icon-style" />
    </div>
  ) : null;
};

export default GoToTop;
