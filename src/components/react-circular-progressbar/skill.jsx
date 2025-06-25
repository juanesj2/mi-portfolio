// src/components/react-circular-progressbar/Skill.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skill = ({ name, percentage, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    style={{ width: 120, margin: 20 }}
  >
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        pathColor: '#00BFFF',
        textColor: '#fff',
        trailColor: '#333',
        strokeLinecap: 'round',
      })}
    />
    <div style={{ textAlign: 'center', marginTop: 10, color: '#fff' }}>{name}</div>
  </motion.div>
);

export default Skill;
