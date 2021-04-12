import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Selection: 'allCats',
      active: false,
    };
  }
  toggleClass = (event) => {
    const currentState = this.state.active;
    event.preventDefault();
    this.setState({
      Selection: event.target.value,
      active: !currentState,
    });
  };

  render() {
    const { Selection } = this.state;
    return (
      <header className="header" >
        <div className="container">
          <ul className="nav-items">
            <li
              className={Selection === 'allCats' ? 'active' : null}
              onClick={this.toggleClass}
              value="allCats"
            >
              Все котики
            </li>
            <li
              className={Selection === 'favoriteCats' ? 'active' : null}
              onClick={this.toggleClass}
              value="favoriteCats"
            >
              Любимые котки
            </li>
          </ul>
        </div>
      </header >
    )
  }
}

export default Header
