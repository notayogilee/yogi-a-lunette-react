import React, { useState, Fragment } from 'react';
import videos from '../_data/video.json';
import ReactPlayer from 'react-player';
import Pagenation from './Pagenation';
import './VideoNew.scss';

const VideoNew = () => {
  ;

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(2);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <Fragment>

      <div className="video-container">
        <ul>
          {currentVideos.map(video => (
            <div className="video">
              <li key={video.id}>
                <h3>{video.title}</h3>
                <div className="clip">
                  <ReactPlayer
                    controls
                    width="320px"
                    height="180px"
                    url={video.url}
                  />
                </div>
                <div className="paragraph">{video.description}</div>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <footer className="pagenation-footer">
        {currentPage > 1 &&

          <a href="#" onClick={() => setCurrentPage(currentPage - 1)}>PREV</a>

        }

        <Pagenation videosPerPage={videosPerPage} totalVideos={videos.length} paginate={paginate} />


        {currentPage < totalPages &&

          <a href="#" onClick={() => setCurrentPage(currentPage + 1)}>NEXT</a>

        }
      </footer>
    </Fragment>
  )
};

export default VideoNew;