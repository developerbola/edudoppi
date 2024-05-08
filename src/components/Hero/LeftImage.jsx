import { motion } from "framer-motion";
import React from "react";

const LeftImage = ({ mt }) => {
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
<<<<<<< HEAD
        duration: .6
=======
        delay: .2
>>>>>>> 2f00df46562d428979e5bc132cc32196ce9f2831
      }}
      whileHover={{
        backgroundSize: "300%"
      }}
      style={{
        height: "70%",
        width: "130px",
        background:
          "url(https://i.pinimg.com/564x/fb/22/82/fb2282597f2aa0af9a1556ce52c6d19a.jpg)",
        backgroundSize: "cover",
        borderRadius: "10px",
      }}
    ></motion.div>
  );
};

export default LeftImage;
