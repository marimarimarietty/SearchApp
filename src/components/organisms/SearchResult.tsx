import React from 'react';
import styles from '@styles/components/organisms/SearchResult.module.scss';
import { GoStar as StarIcon, GoRepoForked as ForkIcon } from "react-icons/go";
import { resultData } from '@/components/organisms/Search';

type Props = {
  data: resultData;
}

export default function SearchResult({data}: Props) {

  return (
    <div className={styles.result}>
      <div className={styles.result__inner}>
        <div className={styles.result__total}>{data?.totalCount} results</div>
      {data?.items.map((elm:any, i:number) => {
        let updatedAt = new Date(elm.updated_at).toDateString();
        return (
          <div key={i} className={styles.item}>
            <h3 className={styles.item__name}>{elm.full_name}</h3>
            {elm.description && <p className={styles.item__desc}>{elm.description}</p>}
            <div className={styles.item__detail}>
              <div className={styles.item__star}>
                <StarIcon />
                <p className={styles.item__starText}>{elm.stargazers_count || 0}</p>
              </div>
              <div className={styles.item__fork}>
                <ForkIcon />
                <p className={styles.item__forkText}>{elm.forks_count || 0}</p>
              </div>
              {elm.language  && <div className={styles.item__language}>{elm.language}</div>}
              {updatedAt && <div className={styles.item__updated}>Updated: {updatedAt}</div>}
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}
