import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';

import { formatMoney } from 'utils';
import Toppings from './toppings';

@connect()
export default class SinglePizza extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      maxToppings: PropTypes.number,
      basePrice: PropTypes.number,
      toppings: PropTypes.array,
    }),
  }

  static defaultProps = {
    data: {},
  }

  constructor(props) {
    super(props);

    const { toppings } = props.data;
    this.state = {
      toppings: toppings.map(topping => ({ ...topping })),
    };
  }

  calculateTotalPrice = () => {
    const { data } = this.props;
    const { basePrice } = data;
    const { toppings } = this.state;

    return toppings
      .filter(topping => topping.selected)
      .reduce((acc, curValue) => acc + curValue.topping.price, basePrice);
  }

  handleToggleTopping = (name, selected) => {
    const { toppings } = this.state;
    const newToppings = toppings.map(item => ({
      ...item,
      selected: (item.topping.name === name) ? selected : item.selected,
    }));
    this.setState({ toppings: newToppings });
  }

  handleAddToCart = () => {
    const { data } = this.props;
    const { toppings } = this.state;
    const selectedToppings = toppings
      .filter(topping => topping.selected)
      .map(({ topping }) => ({ ...topping }));
    const cartItem = {
      ...data,
      totalPrice: this.calculateTotalPrice(),
      toppings: selectedToppings,
    };

    this.props.dispatch({
      type: 'ADD_TO_CART',
      payload: cartItem,
    });
  }

  render() {
    const { data } = this.props;
    const { toppings } = this.state;
    const { name, basePrice } = data;

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <div style={{ float: 'right' }}>
              {formatMoney(this.calculateTotalPrice())}
            </div>
            {name}
          </Card.Header>
          <Card.Meta>
            {formatMoney(basePrice)}
          </Card.Meta>
          <Card.Description>
            <Toppings
              data={{ toppings }}
              onToggleTopping={this.handleToggleTopping} />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            color="green"
            basic
            fluid
            onClick={this.handleAddToCart}>
            Add to cart
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
