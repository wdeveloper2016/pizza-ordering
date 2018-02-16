import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartItem from './cart-item';

@connect(state => ({ carts: state.carts }))
export default class Cart extends React.PureComponent {
  static propTypes = {
    carts: PropTypes.shape({
      items: PropTypes.array,
    }),
  };

  static defaultProps = {
    carts: {
      items: [],
    },
  }

  render() {
    const { carts } = this.props;
    const { items = [] } = carts;

    return (
      <div>
        <h3 className="t-align-center">My Cart</h3>
        {
          items.map(item => (
            <CartItem
              key={item.id}
              data={item} />
          ))
        }
      </div>
    );
  }
}
