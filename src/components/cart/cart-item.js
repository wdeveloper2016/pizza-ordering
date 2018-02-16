import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';

import { formatMoney } from 'utils';

@connect()
export default class CartItem extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      toppings: PropTypes.array,
      totalPrice: PropTypes.number,
    }),
  }

  static defaultProps = {
    data: {},
  }

  handleRemoveFromCart = () => {
    const { data } = this.props;

    this.props.dispatch({
      type: 'REMOVE_FROM_CART',
      payload: data.id,
    });
  }

  render() {
    const { data } = this.props;
    const { name, toppings, totalPrice } = data;

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <div style={{ float: 'right' }}>
              {formatMoney(totalPrice)}
            </div>
            {name}
          </Card.Header>
          <Card.Description>
            {
              toppings.map(topping => (
                <div key={topping.name}>{topping.name}</div>
              ))
            }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            color="red"
            basic
            fluid
            onClick={this.handleRemoveFromCart}>
            Remove from cart
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
