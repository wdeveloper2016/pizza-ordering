import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

class SingleTopping extends React.PureComponent {
  static propTypes = {
    selected: PropTypes.bool,
    data: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
    }),
    onToggleTopping: PropTypes.func.isRequired,
  }

  static defaultProps = {
    selected: false,
    data: {},
  }

  render() {
    const { data, selected, onToggleTopping } = this.props;

    return (
      <Checkbox
        style={{ width: '50%' }}
        className="m-t-05"
        label={data.name}
        checked={selected}
        onChange={(e, { checked }) => onToggleTopping(data.name, checked)} />
    );
  }
}

export default class Toppings extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      toppings: PropTypes.array,
    }),
    onToggleTopping: PropTypes.func.isRequired,
  }

  static defaultProps = {
    data: {
      toppings: [],
    },
  }

  render() {
    const { data, onToggleTopping } = this.props;
    const { toppings = [] } = data;

    return (
      <div>
        {
          toppings.map(({ selected, topping }) => (
            <SingleTopping
              key={topping.name}
              data={topping}
              selected={selected}
              onToggleTopping={onToggleTopping} />
          ))
        }
      </div>
    );
  }
}
