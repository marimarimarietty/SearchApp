import React, { useState, useCallback } from 'react';
import styles from '@styles/components/organisms/Search.module.scss';
import { resultData } from '@/App';

type Props = {
  setData: React.Dispatch<React.SetStateAction<resultData | undefined>>
}

export default function Search({setData}: Props) {
  const [term, setTerm] = useState<string | "">("");

  const fetchData = useCallback(({ input }: any) => {
    const queryTerm = `q=` + encodeURIComponent(input);
    const queryString = `${queryTerm}&sort=stars&order=desc`;
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
  []
  );

  const handleInput = (e: any) => {
    setTerm(e.target.value);
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" || e.currentTarget.title === "search") {
      term ? handleSubmit() : alert("Please enter search term");
    }
  };

  const handleSubmit = () => {
    fetchData(term);
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__inner}>
        <input type="text" id="search_text" className={styles.search__input} value={term || ""} onChange={handleInput} onKeyPress={handleKeyPress}/>
        <button title={"search"} className={styles.search__button} onClick={handleKeyPress}>SEARCH</button>
      </div>
    </div>
  )
}
