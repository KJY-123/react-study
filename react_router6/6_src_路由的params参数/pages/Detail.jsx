import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id, title, content } = useParams();
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  );
}

export default Detail;