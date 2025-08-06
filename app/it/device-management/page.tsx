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
          IT Device Management
        </h1>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
          }}
        >
        During my internship, I was grateful to work with the IT team to gain insight into the variety of work they do. One of my key contributions was managing the offloading of old IT devices, like iPhones, ensuring all of their information, including most recent user, number and MDM enrollment status, was properly documented. Even though this process was tedious, it was crucial for maintaining accurate records and ensuring that all of the devices were properly accounted for. This experience not only helped me understand the importance of asset management in IT but also allowed me to contribute to the team's efficiency and organization. I was able to learn the deeper intricacies of IT operations and how they support the overall functioning of the organization.
        </p>
      </div>
    </main>
  );
}
