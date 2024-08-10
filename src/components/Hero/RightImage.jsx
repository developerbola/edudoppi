import { motion } from "framer-motion";

const RightImage = ({ mt , img}) => {
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0,
        y: 50,
        backgroundSize: "500%",
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
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        borderRadius: "10px",
        objectFit: 'cover'
      }}
    ></motion.div>
  );
};

export default RightImage;
