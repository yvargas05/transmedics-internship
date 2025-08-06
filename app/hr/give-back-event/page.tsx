'use client';

import Link from 'next/link';
import React from 'react';

export default function ProjectPage() {
  return (
    <main
      style={{
        backgroundColor: '#302f32', // cool dark gray
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
      }}
    >
        <Link
        href="/hr"
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
        style={{
          backgroundColor: '#44414F', // cool gray for contrast
          color: '#EFECEA', // light warm gray text
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          maxWidth: '800px',
          width: '100%',
          fontFamily: 'Avenir Next, Avenir Next LT Pro, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            fontWeight: 'bold',
            borderBottom: '2px solid #9D2236',
            paddingBottom: '0.5rem',
          }}
        >
          Give Back Event Fall 2025
        </h1>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
          }}
        >
          This summer I was able to start planning and coordinating the Company Give Back Event for Fall 2025. This event gives the opportunity for employees at the company to volunteer in the community by working with a local non-profit organization to get their hands dirty and plant trees in the local area. I was given the freedom to search for local organizations that would be a good fit for this event and the morals of the company. I appreciate the ability to take control over the beginning stages of this project because I value intentionality and thouughtfullness in choosing small local organization rather than larger organizations that may not have the same impact on the community. I am excited to continue working on this project and see it come to fruition in the Fall.
        </p>
      </div>
    </main>
  );
}
