'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main
      style={{
        backgroundColor: '#302f32', // Cool Dark Grey
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: 'Avenir Next, Avenir Next LT Pro, sans-serif',
        color: '#EFECEA', // Light Warm Gray
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
      <div
      className="fade-in-text"
        style={{
          backgroundColor: '#44414F', // Cool Gray
          padding: '3.5rem 4rem',
          borderRadius: '16px',
          maxWidth: '650px',
          width: '100%',
          boxShadow: '0 0 24px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            marginBottom: '2.5rem',
            color: '#EFECEA',
            borderBottom: '2px solid #9D2236',
            paddingBottom: '1rem',
            fontWeight: 'bold',
          }}
        >
          Contact Me
        </h1>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            fontSize: '1.25rem',
            lineHeight: '2.4',
            marginTop: '1rem',
          }}
        >
          <li>
            📧 Email:{' '}
            <a
              href="mailto:ysabellavargas05@gmail.com"
              style={{ color: '#EFECEA', textDecoration: 'none', fontWeight: '500' }}
            >
              ysabellavargas05@gmail.com
            </a>
          </li>
          <li>
            💼 LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/ysabellavargas05/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#EFECEA', textDecoration: 'none', fontWeight: '500' }}
            >
              linkedin.com/in/ysabellavargas05
            </a>
          </li>
          <li>
            💻 GitHub:{' '}
            <a
              href="https://github.com/yvargas05"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#EFECEA', textDecoration: 'none', fontWeight: '500' }}
            >
              github.com/yvargas05
            </a>
          </li>
          <li>
            🌐 Portfolio:{' '}
            <a
              href="https://ysabella-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#EFECEA', textDecoration: 'none', fontWeight: '500' }}
            >
              ysabella-portfolio.vercel.app
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
