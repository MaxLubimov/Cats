import { createStore } from 'redux'

const likePost = (id, url) => {
  return {
    type: 'TOOGLE_LIKE',
    payload: {
      id,
      url,
    }
  };
};

export const allPosts = (data) => {
  return {
    type: 'ALLPOSTS',
    payload: {
      data
    }
  };
};


const initState = {
  likedPosts: [],
  allPosts: [],
};

const likeRducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOOGLE_LIKE':
      const newSelecredIds = state.likedPosts.some(ids => ids.id === action.payload.id)
        ? state.likedPosts.filter(ids => ids.id !== action.payload.id)
        : state.likedPosts.concat({
          id: action.payload.id,
          url: action.payload.url
        })
      return {
        ...state,
        likedPosts: newSelecredIds,
      };
    case 'ALLPOSTS':
      return {
        ...state,
        allPosts: state.allPosts.concat(action.payload.data)
      };
    default:
      return state;
  }
}

// добавление/удаление поста из стор
export const liked = (id, url, event) => {
  store.dispatch(likePost(id, url));
  event.target.classList.toggle('unlike');
  event.target.classList.toggle('like')
}

const store = createStore(
  likeRducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;