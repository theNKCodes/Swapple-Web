'use client';
import React from 'react';
import styles from './RevealCard.module.css';

interface RevealCardProps {
  label: string;
  title: string;
  description: string;
}

const RevealCard: React.FC<RevealCardProps> = ({ label, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <span className={styles.label}>{label}</span>
        </div>
        <div className={styles.cardBack}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RevealCard;
