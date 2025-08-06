'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CellData {
  name: string;
  description: string;
  link: string;
}

const cellData: CellData[] = [
      {
        name: 'Intern Program',
        description: 'Developed and managed the Summer 2025 internship program.',
        link: '/hr/intern-program',
      },
      {
        name: 'Intern Appreciation Event',
        description: 'Organized a successful event to celebrate interns and donate to a local womens shelter.',
        link: '/hr/appreciation-event',
      },
      {
        name: 'Student Ambassador Program',
        description: 'Helped build a program connecting students to TransMedics and promoting organ donation.',
        link: '/hr/student-ambassador',
      },
      {
        name: 'Company Give-Back Event',
        description: 'Organizing a tree-planting day for the community.',
        link: '/hr/give-back-event',
      },
    ];
export default function HRPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? cellData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === cellData.length - 1 ? 0 : prev + 1));
  };

  return (
    <main
      style={{
        background: 'linear-gradient(145deg,rgb(91, 64, 69) 5%, #302f32 65%, #9D2236 100%)',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Link
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
        className="fade-in-text"
        style={{
          color: '#EFECEA',
          marginBottom: '2rem',
          fontFamily: 'Avenir Next, Avenir Next LT Pro, sans-serif',
          fontWeight: 'bold',
          fontSize: '4rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        HR Projects
      </h1>

      <div
      className="fade-in-text"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          position: 'relative',
        }}
      >
        <button onClick={prev} style={arrowStyle}>
          ◀
        </button>

        <div
        className="fade-in-text"
          style={{
            display: 'flex',
            overflow: 'hidden',
            width: '80vw',
            height: '300px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            position: 'relative',
          }}
        >
          {cellData.map((cell, index) => {
            const isCenter = index === current;
            const offset = (index - current + cellData.length) % cellData.length;
            const scale = isCenter ? 1.2 : 0.85;
            const opacity = isCenter ? 1 : 0.5;
            const zIndex = isCenter ? 2 : 1;

            return (
              <motion.div
                key={index}
                style={{
                  width: isCenter ? '180px' : '180px',
                  flexShrink: 0,
                  height: '180px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--transmedics-red)',
                  color: '#EFECEA',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  fontFamily: 'Avenir Next, Avenir Next LT Pro, sans-serif',
                  padding: '1rem',
                  margin: '0 1rem',
                  cursor: 'pointer',
                  zIndex,
                  transform: `scale(${scale})`,
                  opacity,
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  boxShadow: isCenter
                    ? '0 0 16px rgba(255, 255, 255, 0.4)'
                    : '0 0 8px rgba(255, 255, 255, 0.1)',
                }}
              >
                <Link href={cell.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <strong>{cell.name}</strong>
                  <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>{cell.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <button onClick={next} style={arrowStyle}>
          ▶
        </button>
      </div>
    </main>
  );
}

const arrowStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#EFECEA',
  fontSize: '2rem',
  cursor: 'pointer',
};