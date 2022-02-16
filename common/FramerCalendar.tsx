import { motion } from "framer-motion";
import React, { FC } from "react";

const FramerCalendar = (Component: FC) => {
  return (props: any) => {
    // Пока нету типов )
    return (
      <motion.div
        initial="pageInital"
        animate="pageAnimate"
        variants={{
          pageInital: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};

export default FramerCalendar;
