import React from "react"
import { motion } from "framer-motion"

const FramerCalendar = (Component: React.FC) => {
    return function (props: any) {
        // Пока нету типов
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
        )
    }
}

export default FramerCalendar
