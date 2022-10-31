import React, { useState } from 'react';
import Header from '@/components/organisms/Header';
import Search from '@/components/organisms/Search';
import SearchResult from '@/components/organisms/SearchResult';

export type resultData = {
  totalCount: number,
  items: any,
}

export default function App() {
  const [data, setData] = useState<resultData>();
  
  return (
    <div>
      <Header />
      <Search setData={setData}/>
      {data ? <SearchResult data={data} /> : ""}
    </div>
  );
}
