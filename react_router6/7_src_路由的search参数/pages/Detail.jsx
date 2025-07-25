import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Detail() {
  const [search, setSearch] = useSearchParams();
  return (
    <ul>
      <li>
        <button onClick={() => setSearch('id=1&title=haha&content=我我')}>点我更新一下收到的search参数</button>
      </li>
      <li>{search.get('id')}</li>
      <li>{search.get('title')}</li>
      <li>{search.get('content')}</li>
    </ul>
  );
}

export default Detail;