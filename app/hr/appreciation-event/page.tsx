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
          Intern Appreciation Day Event 2025
        </h1>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
          }}
        >
                This July I was able to full plan, develop and organize the Intern Appreciation Day Event for the Summer 2025 Interns. This event was a great way to show appreciation for the interns and all of their hard work over the summer. I was able to coordinate with a local womens shelter to donate hyginene bags that the interns assembled during the event over lunch. Addiotnally, I collaborated with managers across the comoany to create a slideshow for each of their interns to express their graditiude and appreciation for the work they did over the summer. I was able to provide food, drinks and dessert for the interns and managers by ordering catering to enjoy during the event. I am grateful to be given full control over the planning and cordination of this event because I was able to devlop a meaningful event for the interns, and managers while giving back to people in need. I was able to gain confidence in my project management skills and trust my descisions in planning this event. Even with the challenges that came with planning this event, I was able to see the impact it had on everyone who attended and I am proud of the work I did to make it a success.
        </p>
      </div>
    </main>
  );
}
