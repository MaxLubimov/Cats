import React, { Component } from 'react';
import { connect } from 'react-redux';
import { liked } from './store';

// рендер лайкнутых котиков
class FavoriteList extends Component {
  render() {
    const FavoriteListId = this.props.Store.likedPosts;
    return (
      FavoriteListId.length !== 0
        ?
        <div className="container">
          <ul className="cat-cards">
            {FavoriteListId.map(item => (
              <li
                className="cat-card"
                key={item.id}
                style={{
                  backgroundImage: `url("${item.url}")`
                }}
              >
                <input
                  onClick={(className) => liked(item.id, item.url, className)}
                  type="button"
                  className="heart-img like"
                  value=""
                  name=""
                />
              </li>
            ))}
          </ul>
        </div>
        : false
    )
  }
}

export default connect(
  state => ({
    Store: state
  }),
)(FavoriteList)
