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
          Aviation iPad Deployment
        </h1>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
          }}
        >
         This summer I was able to assist the IT team with the imaging and deployment of iPads for the Aviation team. This project involved preparing the devices with Apple Configurator, to ensure each iPad was confiugured with the necessary apps and settings for the Aviation team to use in their daily operations. I also learned the importance of Apple Business Manager in managing and deploying Apple devices into our Mobile Device Managment system, Jamf Pro. This process came with a lot of challenges, forcing me to thoroughly learn the software, and adapt to the problems that arose. Overall, this project was a great learning expierence, and I was able to gain a deeper understanding into the IT operations that support the overall functionality of the company. This project demonstrated the responsiblity and attention to detail required in IT operations, as well as the importance of effective communication and collaboration with other teams.
        </p>
      </div>
    </main>
  );
}
