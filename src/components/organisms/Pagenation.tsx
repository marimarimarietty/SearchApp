import React from 'react';
import styles from '@styles/components/organisms/Pagenation.module.scss';

type Props = {
  page: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagenation({page, total, setPage}: Props) {
  const handlePagination = (direction: string) => {
    let offset = page * 31;
    let results = total || 0;
    if (direction === "prev" && page >= 2) {
      setPage(page - 1);
    }
    if (direction === "next" && page > 0 && offset < results) {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.page__inner}>
        <div className={styles.page__content}>
          <div className={styles.page__prev} onClick={() => handlePagination("prev")}>Prev</div>
          <p className={styles.page__now}>Page {page}</p>
          <div className={styles.page__next} onClick={() => handlePagination("next")}>Next</div>
        </div>
      </div>
    </div>
  )
}
