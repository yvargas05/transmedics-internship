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
          Student Ambassador Program
        </h1>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
          }}
        >
         In additon to the short term projects I worked on this summer, I was able to provide assistance in creating long term programs and larger projects that will be implemented in the future. One of these projects was the Student Ambassador Program, a program that will allow TransMedics to engage with local students and universities to promote the importance of organ donation and the TransMedics mission. I researched local student organizations and clubs related to healthcare, medical devices, medical engineering and more to find a target demographic that would be interested in this program. With this program, I hope to create a community of students that are passionate about organ donation and introduce them to the innovative work that TransMedics is doing in the field of organ transplantation. With a series of events and acitvies, I hope to inspire a new generation of students to get involved with TransMedics and develop a passion for healthcare innovation. I am excited to see this program grow in the future, and I hope to launch the first chapter at Tufts University this year.
        </p>
      </div>
    </main>
  );
}
