import { motion } from "framer-motion";
import img from "../../assets/course.jpg";

const RightImage = ({ mt }) => {
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0,
        y: 50,
        backgroundSize: "300%",
        backgroundPosition: "50%, -50%",
      }}
      animate={{ x: 0, opacity: 1, y: mt, backgroundSize: "200%" }}
      transition={{
        type: "tween",
        duration: .6
      }}
      whileHover={{
        backgroundSize: "300%",
      }}
      style={{
        height: "70%",
        width: "130px",
        background:
          `url(${img})`,
        backgroundSize: "cover",
        borderRadius: "10px",
      }}
    ></motion.div>
  );
};

export default RightImage;
