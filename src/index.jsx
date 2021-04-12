import React, { useState, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom';
import CatList from './CatList'
import FavoriteList from './FavortieList'
import store, { allPosts, addToLikePost } from './store'
import './index.css';

function App() {
  const dispatch = useDispatch();
  const [fetching, setFetcing] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const [active, setActive] = useState(false)
  const [Selection, setSelection] = useState('allCats')

  // подписка на скролл
  useEffect(() => {
    document.addEventListener('scroll', scrollHander)
    return function () {
      document.removeEventListener('scroll', scrollHander)
    };
  }, [])

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      dispatch(addToLikePost(key, localStorage.getItem(key)))
    }
  })

  // загрузка данных + диспатч в стор
  useEffect(() => {
    if (fetching) {
      const fetchData = async () => {
        let res = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=20&page=${currentPage}`
        );
        setCurrentPage(prevState => prevState + 1)
        let response = await res.json();
        dispatch(allPosts(response));
      };
      fetchData().finally(() => setFetcing(false));
    }
  }, [fetching]);
  ;

  // проверка конца страницы
  const scrollHander = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) { setFetcing(true) }
  }

  //тоггл вкладки
  const toggleContent = (event) => {
    const currentState = active;
    event.preventDefault();
    setSelection(event.target.value)
    setActive(!currentState)
  }

  // отображение нужной вкладки
  const switchContent = (value) => {
    switch (value) {
      case 'allCats':
        return <CatList />;
      case 'favoriteCats':
        return <FavoriteList />;
      default:
        return null;
    }
  }

  return (
    <>
      <header className="header" >
        <div className="container">
          <div className="nav-items">
            <button autoFocus className={Selection === 'allCats' ? 'active' : null} value="allCats" onClick={toggleContent} >Все котики</button>
            <button className={Selection === 'favoriteCats' ? 'active' : null} value="favoriteCats" onClick={toggleContent} >Любимые котки</button>
          </div>
        </div>
      </header >
      { switchContent(Selection)}
    </>
  )
}

const rootElement = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  rootElement);


