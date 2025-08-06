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
        href="/it"
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
          MES Workstation Imaging
        </h1>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
          }}
        >
                For another part of my internship expierence, I was pulled into the MES Worksation Imaging project. This project included assembling Lenovo PC and Monitors and imaging them with MES gold image software. I was able to learn how to use the imaging software to properly set up the workstations with all necessary software and configurations. This experience not only helped me understand the technical aspects of IT operations but also allowed me to contribute to the efficiency of the IT team by ensuring that all workstations were properly set up and ready for use. I was able to gain hands-on experience with hardware and software configurations, which is a valuable skill in the IT field.
        </p>
      </div>
    </main>
  );
}
