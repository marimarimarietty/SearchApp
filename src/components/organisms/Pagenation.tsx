import React from 'react';
import styles from '@styles/components/organisms/Pagenation.module.scss';

type Props = {
  page: number;
}

export default function Pagenation({page}: Props) {
  return (
    <div className={styles.page}>
      <div className={styles.page__inner}>
        <div className={styles.page__content}>
          <div className={styles.page__prev}>Prev</div>
          <p className={styles.page__now}>Page {page}</p>
          <div className={styles.page__next}>Next</div>
        </div>
      </div>
    </div>
  )
}
