import React, { useState, useCallback, useEffect } from 'react';
import styles from '@styles/components/organisms/Search.module.scss';
import SearchResult from '@/components/organisms/SearchResult';
import Pagenation from '@/components/organisms/Pagenation';

export type resultData = {
  totalCount: number,
  items: [],
}

type fetchDataProps = {
  term: string,
}

export default function Search() {
  const [term, setTerm] = useState<string>("");
  const [data, setData] = useState<resultData>();
  const [page, setPage] = useState<number>(1);

  const fetchData = useCallback(({ term }: fetchDataProps) => {
    const queryTerm = `q=` + encodeURIComponent(term);
    const queryPage = `&page=${page || 1}`;
    const queryString = `${queryTerm}&sort=stars&order=desc${queryPage}`;
    let url = `https://api.github.com/search/repositories?${queryString}`;

    fetch(url).then((res) => res.json()).then((data) => {
      setData({
        totalCount: data.total_count,
        items: data.items
      });
    }).catch((error) => {
        console.log(error);
    })
  },
  [page]
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" || e.currentTarget.title === "search") {
      term ? handleSubmit() : alert("Please enter search term");
    }
  };

  const handleSubmit = () => {
    setPage(1);
    fetchData({term: term});
  };

  useEffect(() => {
    if (term) {
      fetchData({ term: term });
    }
  }, [page, fetchData, term]);

  return (
    <>
      <div className={styles.search}>
        <div className={styles.search__inner}>
          <input type="text" id="search_text" className={styles.search__input} value={term || ""} onChange={handleInput} onKeyPress={handleKeyPress}/>
          <button title={"search"} className={styles.search__button} onClick={handleKeyPress}>SEARCH</button>
        </div>
      </div>
      {data ? <Pagenation page={page} total={data.totalCount} setPage={setPage} /> : ""}
      {data ? <SearchResult data={data} /> : ""}
    </>
  )
}
