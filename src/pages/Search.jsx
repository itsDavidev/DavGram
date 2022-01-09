import { useEffect, useState } from 'react';
import useSearch from '../hooks/useSearch';
import useTrendingPhotos from '../hooks/useTrendingPhotos';
import styled from 'styled-components';
import SwiperTrending from '../Containers/SwiperTrending';
import CardPost from '../components/CardPost';

const StyledSearch = styled.div`
  min-height: 100vh;
  height: 100%;
  form {
    margin-top: 300px;
    
    label {
      display:flex;
      align-items: center;
      justify-content: center;
      input {
        border-radius: 1rem;
        border:none;
        padding: 0.5rem;
        width: 80%;
        background:none;
        outline: none;
        font-size: 1.2rem;
        color: #170055;
        border-bottom: 1px solid #170055;
        :focus{
          outline:none;
        }
        ::placeholder{
          font-weight:bold
        }
      }
    }
  }
`;

const Search = () => {
  const [search, setSearch] = useState('');
  const dataTrending = useTrendingPhotos();
  const dataSearch = useSearch({ title: search });
  const HandleSearch = (evt) => {
    evt.preventDefault();
    const value = evt.target[0].value;
    setSearch(value);
  };
  return (
    <StyledSearch>
      <h1>expolore</h1>
      <div className="trendingRandom">
        <SwiperTrending />
      </div>
      <form onSubmit={HandleSearch}>
        <label>
           <input type="text" placeholder='search Photos'/>
        </label>
        <label>
          <button type="submit">search</button>
        </label>
      </form>
      <div className="renderSear">
        {dataSearch.results &&
          dataSearch.results.map((item) => {
            return <CardPost i={item} />;
          })}
      </div>
    </StyledSearch>
  );
};

export default Search;
