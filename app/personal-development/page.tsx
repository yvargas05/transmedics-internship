'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function PersonalDevelopmentPage() {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <main
      style={{
        backgroundColor: '#302f32',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Avenir Next, Avenir Next LT Pro, sans-serif',
        color: '#EFECEA',
        padding: '2rem',
      }}
    >
        <Link
        className="fade-in-text"
        href="/"
        style={{
                
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          background: '#9D2236',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          fontFamily: 'Avenir Next, Avenir Next LT Pro, sans-serif',
        }}
      >
        ← Back
      </Link>
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          borderBottom: '2px solid #9D2236',
          paddingBottom: '0.5rem',
        }}
      >
        Personal and Career Development
      </h1>

      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1000px',
        }}
      >
        {/* Before Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor: '#44414F',
            padding: '2rem',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '400px',
            minHeight: '300px',
            boxShadow: '0 0 12px rgba(255,255,255,0.2)',
          }}
        >
          <h2 style={{ fontSize: '2rem', color: '#F9AD81' }}>Before Internship</h2>
          <p style={{fontSize: '1.5rem'}}>
            I came into this internship with ... 
          </p>
          <li> A general curiosity about HR, specficially when it comes to developing community outreach programs.
          </li>
          <li> A set idea of the type of job I wanted -- working behind the scenes, only small scaled projects, and set deadlines </li>
          <li> A clear set of moral values that I used as directing factor when considering what industry and field I work toward, but not a specfic role or idea of what my day to day would look like. </li>
        <li> A drive to make a meaningful change within the company, meet new people, and learn what corporate life looks like during my time here </li>
       
       
        </motion.div>

        {/* Arrow Button */}
        <motion.button
          onClick={() => setShowAfter(true)}
          disabled={showAfter}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'none',
            border: '2px solid #EFECEA',
            color: '#EFECEA',
            fontSize: '2rem',
            padding: '0.5rem 1rem',
            borderRadius: '50%',
            cursor: showAfter ? 'default' : 'pointer',
          }}
        >
          →
        </motion.button>

        {/* After Box */}
        <AnimatePresence>
          {showAfter && (
            <motion.div
              key="after"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                backgroundColor: '#44414F',
                padding: '2rem',
                borderRadius: '10px',
                width: '100%',
                maxWidth: '400px',
                minHeight: '300px',
                boxShadow: '0 0 12px rgba(255,255,255,0.2)',
              }}
            >
              <h2 style={{fontSize: '2rem', color: '#F9AD81' }}>After Internship</h2>
              <p style={{fontSize: '1.5rem'}}>
               I will be leaving this internship with...
              </p>
              <li>
                A better understanding of the types of roles I see myself in, and the type of work I want to do, specifically shifting my focus to project management.
              </li>
              <li> 
                A new set of technical and professional skills, including organization, communcation, and project management skills, along with Apple Business Manager, Apple Configurator, Azure Active Directory and Jamf Pro.
              </li>
              <li>
                A strong feeling confidence and pride in my decision making within my career aspriations now that I have a better idea of what I want my future to look like.
              </li>
              <li>
                An amazing group of interns that will each make a lasting impact on my expierence this summer!
              </li>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
