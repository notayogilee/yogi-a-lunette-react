import React, { useState } from 'react';
import videos from '../_data/video.json';
import ReactPlayer from 'react-player';
import Pagenation from './Pagenation';
import './VideoNew.scss';

const VideoNew = () => {
  ;

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(6);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className="video-container">
      <ul>
        {currentVideos.map(video => (
          <li key={video.id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <ReactPlayer
              className="clip"
              controls
              width="320px"
              height="180px"
              url={video.url}
            />
          </li>
        ))}
      </ul>
      {currentPage > 1 &&
        <a href="#" onClick={() => setCurrentPage(currentPage - 1)}>PREV</a>
      }

      <Pagenation videosPerPage={videosPerPage} totalVideos={videos.length} paginate={paginate} />
      {currentPage < totalPages &&
        <a href="#" onClick={() => setCurrentPage(currentPage + 1)}>NEXT</a>
      }
    </div>
  )
};

export default VideoNew;