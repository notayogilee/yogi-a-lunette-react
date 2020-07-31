import React, { useState } from 'react';
import './Pagination.scss';


const Pagenation = ({ videosPerPage, totalVideos, paginate, currentPage }) => {

  const [highlight, setHighlight] = useState("");
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="list">
        {pageNumbers.map(number => (
          <li key={number} className="page-number">

            {number === currentPage &&
              <a onClick={() => { paginate(number); setHighlight("highlight") }} href="#" className={"highlight"}>
                {number}
              </a>
            }
            {number !== currentPage &&
              <a onClick={() => { paginate(number); setHighlight("highlight") }} href="#">
                {number}
              </a>
            }
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Pagenation;
