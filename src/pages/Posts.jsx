import styled from 'styled-components';
import {
  AiFillLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import usePhotos from '../hooks/usePhotos';
import LoadMore from '../utils/LoadMore';

const StyledPosts = styled.div`
  article {
    border-radius: 7px;
    background: #515f6f;
    box-shadow: inset -5px -5px 10px #22282f, inset 5px 5px 10px #8096af;
    margin: 1rem 0;
  }
  .headerPost {
    padding: 0.3rem 1rem;
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      cursor: pointer;
    }
    h4 {
      margin: 0 0.5rem;
      font-weight: bold;
      color: #170055;
    }
    img {
      border-radius: 50%;
      margin: 0.4rem 0;
    }
  }
  .containerPost {
    padding: 0 0.8rem;
    img {
      width: 100%;
      object-fit: cover;
    }
    h1 {
      color: #04293a;
    }
  }
  .acces {
    padding: 0rem 1rem;
    button {
      background: transparent;
      border: none;
      animation-duration: 3s;
      svg {
        font-size: 1.3rem;
      }
      :active {
        color: #ff0000;
      }
    }
  }
  .footerPost {
    padding: 0.3rem 1rem;
    span {
      color: #ffffff;
      font-weight: bold;
      margin-right: 0.3rem;
    }
    p {
      margin: 0 0.3rem;
      width: 100%;
      font-size: 0.8rem;
    }
  }
  footer {
    button {
      padding: 1rem;
      border-radius: 18px;
      background: #0e9fb7;
      border: none;
    }
  }
`;

const Posts = () => {
  const [limit, setLimit] = useState(5);
  const data = usePhotos({ limit: limit });
  const HandleLoadMore = () => {
    setLimit(limit + 5);
  };
  console.log(limit);
  return (
    <>
      <h1>Posts</h1>
      <StyledPosts>
        {data.map((i) => {
          return (
            <article key={i.id}>
              <div className="headerPost">
                <img src={i.user.profile_image.small} alt="" />
                <Link to={`/user/${i.user.username}`}>
                  <h4>{i.user.name}</h4>
                </Link>
              </div>
              <div className="containerPost">
                <img src={i.urls.small} alt="" />
              </div>
              <div className="acces">
                <button>
                  <AiFillLike />
                </button>
                <button>
                  <AiOutlineComment />
                </button>
                <button>
                  <AiOutlineShareAlt />
                </button>
              </div>
              <div className="footerPost" id="RenderImage">
                <p>
                  <span>{i.likes} </span>
                  likes
                </p>
                <p>{i.description || 'No descrioption '}</p>
                <time></time>
              </div>
            </article>
          );
        })}
        <footer className="loadMore">
          <button onClick={HandleLoadMore}>
            <span>view more</span>
          </button>
        </footer>
      </StyledPosts>
    </>
  );
};

export default Posts;

//
