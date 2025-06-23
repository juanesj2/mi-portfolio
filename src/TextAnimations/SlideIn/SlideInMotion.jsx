// SlideInMotion.jsx
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const SlideInMotion = ({ children, direction = 'left' }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  const xInitial = direction === 'left' ? '-100%' : '100%';

  useEffect(() => {
    if (isInView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: xInitial, opacity: 0 }}
      animate={controls}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInMotion;
