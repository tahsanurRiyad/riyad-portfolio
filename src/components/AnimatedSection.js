// import React, { useEffect } from 'react';
// // Corrected: Import useInView directly from framer-motion
// import { motion, useAnimation, useInView } from 'framer-motion';

// const AnimatedSection = ({ children, id }) => {
//   const controls = useAnimation();
  
//   // The 'ref' is now created and used by framer-motion's own useInView hook
//   const ref = React.useRef(null);
//   const inView = useInView(ref, {
//     triggerOnce: true, // Only trigger the animation once
//     threshold: 0.2,   // Trigger when 20% of the element is in view
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   return (
//     // The ref from useInView is now attached to the motion component
//     <motion.section
//       id={id}
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={sectionVariants}
//     >
//       {children}
//     </motion.section>
//   );
// };

// export default AnimatedSection;


import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const AnimatedSection = ({ id, setRef, children }) => {
  const localRef = useRef(null);

  useEffect(() => {
    if (setRef && localRef.current) {
      setRef(id, localRef.current);
    }
  }, [id, setRef]);

  return (
    <motion.section
      ref={localRef}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={fadeIn}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
