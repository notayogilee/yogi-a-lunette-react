import React, { useState, Fragment } from 'react';
import videos from '../_data/video.json';
import ReactPlayer from 'react-player';
import Pagination from './Pagination';
import './Videos.scss';

const Videos = () => {

  // const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(4);

  const findVideosOfType = function (videos, type) {
    if (type === "all") {
      return videos;
    }
    return videos.filter(video => video.type === type);
  }

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const totalVideosOfType = findVideosOfType(videos, type);
  const currentVideos = totalVideosOfType.slice(indexOfFirstVideo, indexOfLastVideo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(totalVideosOfType.length / videosPerPage);

  return (
    <Fragment>
      {!type &&
        <div className="styles">
          <ul>
            <li>
              <a href="#" onClick={() => setType("flow")}>Flow</a>
            </li>
            <li>
              <a href="#" onClick={() => setType("pranayama")}>Pranayama</a>
            </li>
            <li>
              <a href="#" onClick={() => setType("tutorial")}>Tutorial</a>
            </li>
            <li>
              <a href="#" onClick={() => setType("chair")}>Chair</a>
            </li>
            <li>
              <a href="#" onClick={() => setType("restorative")}>Restorative</a>
            </li>
            <li>
              <a href="#" onClick={() => setType("other")}>Other</a>
            </li>
            <li>
              <a href="#" onClick={() => setType("all")}>All</a>
            </li>
          </ul>
        </div>
      }

      <div className="video-container" onClick={() => { setType(""); setCurrentPage(1) }}>
        <ul className="video-list">
          {currentVideos.map(video => (

            <li key={video.id} >
              <h3>{video.title}</h3>

              <ReactPlayer
                controls
                width="90%"
                height="50vh"
                url={video.url}
              />

              <div className="paragraph">{video.description}</div>
            </li>

          ))}
        </ul>
      </div>

      {type &&
        <div className="pagination-footer">
          <div className="prev">
            {currentPage > 1 &&
              <a href="#" onClick={() => setCurrentPage(currentPage - 1)}>PREV</a>
            }
          </div>

          <div className="pagination">
            <Pagination videosPerPage={videosPerPage} totalVideos={videos.length} paginate={paginate} currentPage={currentPage} totalVideosOfType={totalVideosOfType} />
          </div>
          <div className="next">
            {currentPage < totalPages &&
              <a href="#" onClick={() => setCurrentPage(currentPage + 1)}>NEXT</a>
            }
          </div>
        </div>
      }
    </Fragment>
  )
};

export default Videos;