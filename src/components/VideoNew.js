import React, { useState, Fragment } from 'react';
import videos from '../_data/video.json';
import ReactPlayer from 'react-player';
import Pagination from './Pagination';
import './VideoNew.scss';

const VideoNew = () => {
  ;

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(4);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <Fragment>

      <div className="video-container">
        <ul className="video-list">
          {currentVideos.map(video => (

            <li key={video.id} >
              <h3>{video.title}</h3>

              <ReactPlayer
                controls
                width="90%"
                height="180px"
                url={video.url}
              />

              <div className="paragraph">{video.description}</div>
            </li>

          ))}
        </ul>
      </div>

      <div className="pagination-footer">
        <div className="prev">
          {currentPage > 1 &&
            <a href="#" onClick={() => setCurrentPage(currentPage - 1)}>PREV</a>
          }
        </div>

        <div className="pagination">
          <Pagination videosPerPage={videosPerPage} totalVideos={videos.length} paginate={paginate} currentPage={currentPage} />
        </div>
        <div className="next">
          {currentPage < totalPages &&
            <a href="#" onClick={() => setCurrentPage(currentPage + 1)}>NEXT</a>
          }
        </div>
      </div>
    </Fragment>
  )
};

export default VideoNew;