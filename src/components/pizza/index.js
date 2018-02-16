import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import allPizzaSizes from 'src/graphql/queries/pizzaSizes.gql';
import SinglePizza from './single-pizza';

@graphql(allPizzaSizes)
export default class AllPizzas extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      pizzaSizes: PropTypes.array,
    }),
  }

  static defaultProps = {
    data: {
      pizzaSizes: [],
    },
  }

  render() {
    const { data } = this.props;
    const { pizzaSizes = [] } = data;
    // const isLoading = data.loading ? 'yes' : 'nope';

    return (
      <div>
        <h3 className="t-align-center">Available Pizzas</h3>
        {
          pizzaSizes.map(pizzaSize => (
            <SinglePizza
              key={pizzaSize.name}
              data={pizzaSize} />
          ))
        }
      </div>
    );
  }
}
