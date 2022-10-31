import React, { useState, useEffect, useCallback } from 'react';
import styles from '@styles/components/organisms/SearchResult.module.scss';

type Props = {
  data: any;
}

export default function SearchResult({data}: Props) {

  return (
    <div className={styles.result}>
      <div className={styles.result__inner}>
      {data?.items.map((elm:any, i:number) => {
        return (
          <div key={i}>{elm.full_name}</div>
        )
      })}
      </div>
    </div>
  )
}
