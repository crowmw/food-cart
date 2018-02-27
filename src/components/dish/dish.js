import React, { Component } from 'react'
import KebabIcon from '../../assets/images/kebab.jpg'
import Plus from '../../assets/icons/plus.svg'
import { CSSTransition } from 'react-transition-group'
import './dish.css'

class Dish extends Component {
  state = {
    expanded: false
  }

  handleExpandClick = e => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { name, description, stars, weight, price, id, ingredients } = this.props
    const { expanded } = this.state

    return (
      <li className="Dish">
        <img className="dish-icon" src={KebabIcon} alt={name} />
        <div className="dish-content" onClick={this.handleExpandClick}>
          <h3 className="dish-name">{name}</h3>
          <div className="dish-ingredients">
            {ingredients.map(
              (ingredient, index) =>
                index !== ingredients.length - 1 ? `${ingredient}, ` : `${ingredient}`
            )}
          </div>

          <CSSTransition
            in={expanded}
            timeout={1000}
            mountOnEnter={true}
            unmountOnExit={true}
            classNames="fold-and-fade-description"
          >
            <div className="dish-description">{description}</div>
          </CSSTransition>

          <div className="dish-footer">
            <span className="dish-weight">{weight}g</span>
            <div className="dish-price">
              {price}
              <span>zł</span>
            </div>
          </div>
        </div>
        <div className="circle">
          <img src={Plus} alt="plus-icon" />
        </div>
      </li>
    )
  }
}

export default Dish
