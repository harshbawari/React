import React, { Component } from 'react';
import Menu from './MenuComponent';
import '../App.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({selectedDish: dish});
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
          </div>
          <div className="row">
            <DishDetail Dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}
export default Main;
