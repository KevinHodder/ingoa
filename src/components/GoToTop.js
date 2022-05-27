import ScrollToTop from "react-scroll-to-top";
import { FaChevronCircleUp } from "react-icons/fa";
import "./GoToTop.css";

const GoToTop = () => {
  return (
    <ScrollToTop
      style={{
        borderRadius: "50%",
        backgroundColor: "#ffffff00",
        width: "60px",
        height: "60px",
        boxShadow: "none",
      }}
      component={<FaChevronCircleUp />}
    />
  );
};

export default GoToTop;
