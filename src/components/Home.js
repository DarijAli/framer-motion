import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <motion.div
      className="home container"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <h2 animate={{ fontSize: 50 }}>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button animate={{}}>Create Your Pizza</motion.button>
      </Link>
    </motion.div>
  )
}

export default Home
