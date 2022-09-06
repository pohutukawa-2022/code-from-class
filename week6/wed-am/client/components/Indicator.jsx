import React from 'react'
import { motion } from 'framer-motion'

function Indicator () {
  return <motion.div
    className='bg-blue-600 rounded-md w-20 h-20 absolute'
    animate={{
      scale: [1, 1.5, 1.25, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%']
    }}
    transition={{
      duration: 2,
      ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }}
  />
}

export default Indicator
