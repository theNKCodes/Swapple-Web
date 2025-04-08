import React from 'react';
import RevealCard from '../components/RevealCard';

export default function Bottom() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      minHeight: '100vh',
      background: '#f9f9f9',
      padding: '2rem'
    }}>
      <RevealCard
        label="A"
        title="Stealth Tech"
        description="Coming soon..."
      />
      <RevealCard
        label="B"
        title="HYPE-VIPE"
        description="An AI driven social media management company / Agency."
      />
      <RevealCard
        label="C"
        title="New Venture"
        description="More details launching shortly."
      />
    </main>
  );
}