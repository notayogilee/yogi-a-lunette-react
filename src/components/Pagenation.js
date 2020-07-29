import React from 'react';
import './Pagenation.scss';

const Pagenation = ({ videosPerPage, totalVideos, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="list">
        {pageNumbers.map(number => (
          <li key={number} className="page-number">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Pagenation;
