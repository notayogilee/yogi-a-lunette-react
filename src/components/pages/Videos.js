import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import videos from '../../_data/video.json';
import ReactPlayer from 'react-player/youtube';
import Pagination from '../layout/Pagination';
import './Videos.scss';

const Videos = () => {

  const [truncated, setTruncated] = useState(true);
  const [id, setId] = useState(0);
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(2);
  // const videosPerPage = 2;

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (vw < 800) {
      setVideosPerPage(videos.length);
    }
  }, [])


  // Truncate video description
  const maxDescriptionLength = 200;

  const truncate = (videoDescription) => {
    if (videoDescription.length > maxDescriptionLength && videoDescription.charAt(maxDescriptionLength) === " ") {
      return videoDescription.substring(0, maxDescriptionLength) + "...";
    } else if (videoDescription.length > maxDescriptionLength && videoDescription.charAt(maxDescriptionLength) !== " ") {
      const truncatedText = videoDescription.substring(0, maxDescriptionLength);
      const whiteSpaceIndex = truncatedText.lastIndexOf(" ");
      return truncatedText.substring(0, whiteSpaceIndex) + "...";
    } else {
      return videoDescription;
    }
  }

  const findVideosOfType = (videos, type) => {
    if (type === "all") {
      return videos;
    }
    return videos.filter(video => video.type === type);
  };

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
            {/* <li>
              <Link to="/live">Live Stream</Link>
            </li> */}
            <li>
              <a href="#!" onClick={() => setType("flow")}>Flow</a>
            </li>
            <li>
              <a href="#!" onClick={() => setType("pranayama")}>Pranayama</a>
            </li>
            <li>
              <a href="#!" onClick={() => setType("tutorial")}>Tutorial</a>
            </li>
            <li>
              <a href="#!" onClick={() => setType("chair")}>Chair</a>
            </li>
            <li>
              <a href="#!" onClick={() => setType("restorative")}>Restorative</a>
            </li>
            <li>
              <a href="#!" onClick={() => setType("other")}>Other</a>
            </li>
            <li>
              <a href="#!" onClick={() => setType("all")}>All</a>
            </li>
          </ul>
        </div>
      }

      <div className="video-container" onDoubleClick={() => { setType(""); setCurrentPage(1) }}>
        <ul className="video-list">

          {currentVideos.map(video => (

            <li key={video.id} >
              <h3>{video.title}</h3>
              <div className="player">
                <ReactPlayer
                  controls
                  width="100%"
                  height="100%"
                  url={video.url}
                />
              </div>

              {truncated &&
                <div className="paragraph">
                  {truncate(video.description)}
                  <div>
                    {video.description.length > maxDescriptionLength &&
                      <a
                        href="#!"
                        onClick={() => {
                          setId(video.id);
                          setTruncated(false)
                        }
                        }
                      >
                        plus
                      </a>
                    }
                  </div>
                </div>
              }

              {!truncated && video.id === id &&
                <div className="paragraph">
                  {video.description}
                  <div>
                    {video.description.length > maxDescriptionLength &&
                      <a
                        href="#!"
                        onClick={() => setTruncated(true)}
                      >
                        moins
                    </a>
                    }
                  </div>
                </div>
              }

              {!truncated && video.id !== id &&
                <div className="paragraph">
                  {truncate(video.description)}
                  <div>
                    {video.description.length > maxDescriptionLength &&
                      <a
                        href="#!"
                        onClick={() => {
                          setId(video.id);
                          setTruncated(false)
                        }
                        }
                      >
                        plus
                      </a>
                    }

                  </div>
                </div>
              }

            </li>

          ))}
        </ul>
      </div>

      {
        type &&
        <div className="pagination-footer">
          <div className="prev">
            {currentPage > 1 &&
              <a href="#!" onClick={() => setCurrentPage(currentPage - 1)}>PREV</a>
            }
          </div>

          <div className="pagination">
            <Pagination videosPerPage={videosPerPage} totalVideos={videos.length} paginate={paginate} currentPage={currentPage} totalVideosOfType={totalVideosOfType} />
          </div>
          <div className="next">
            {currentPage < totalPages &&
              <a href="#!" onClick={() => setCurrentPage(currentPage + 1)}>NEXT</a>
            }
          </div>
        </div>
      }
    </Fragment>
  )
};

export default Videos;