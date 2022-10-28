import React from 'react';
import styles from '@styles/components/organisms/Header.module.scss';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <h1>Github Search</h1>
      </div>
    </header>
  )
}
