import { motion } from 'framer-motion'

function Page(props) {
  const { animationKey, animate, children } = props
  return animate ? (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      transition={{ duration: 0 }}
      variants={{
        pageInitial: {
          opacity: 1,
        },
        pageAnimate: {
          opacity: 1,
        },
        pageExit: {
          backgroundColor: 'white',
          filter: 'invert()',
          opacity: 0,
        },
      }}
      key={animationKey}
    >
      {children}
    </motion.div>
  ) : (
    children
  )
}

export default Page
