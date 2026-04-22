import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const FadeInOnScroll = ({
  children,
  delay = 0,
  showAnimation,
  isHorizontal,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  if (!showAnimation) return <>{children}</>

  return (
    <motion.div
      style={{ height: "100%" }}
      ref={ref}
      initial={{ opacity: 0, ...(isHorizontal ? { x: 80 } : { y: 40 }) }}
      animate={
        inView ? { opacity: 1, ...(isHorizontal ? { x: 0 } : { y: 0 }) } : {}
      }
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="div-fade"
    >
      {children}
    </motion.div>
  )
}

export default FadeInOnScroll
