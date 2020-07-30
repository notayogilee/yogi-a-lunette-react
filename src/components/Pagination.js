import React, { useState } from 'react';
import './Pagination.scss';


const Pagenation = ({ videosPerPage, totalVideos, paginate, currentPage }) => {

  const [highlight, setHighlight] = useState(currentPage);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="list">
        {pageNumbers.map(number => (
          <li key={number} className="page-number">
            <a onClick={() => { paginate(number); setHighlight(true) }} href="#" id="page-link" className={highlight}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Pagenation;
