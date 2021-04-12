import React, { Component } from 'react';
import { connect } from 'react-redux';
import { liked } from './store'

// рендер всех котиков
class CatList extends Component {
  render() {
    const data = this.props.Store.allPosts;
    return (
      <div className="container">
        <ul className="cat-cards">
          {data.map(data => (
            <li
              className="cat-card"
              key={data.id}
              style={{
                backgroundImage: `url("${data.url}")`
              }}
            >
              <input
                onClick={(event) => liked(data.id, data.url, event)}
                type="button"
                className={`heart-img + ${this.props.Store.likedPosts.some(ids => ids.id === data.id) ? 'like' : 'unlike'}`}
                value=""
                name=""
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    Store: state
  })
)(CatList)
