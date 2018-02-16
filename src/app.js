import config from 'kit/config';
import cartsReducer from 'reducers/carts';
import Main from 'components/main';
import './styles.global.css';

config.addReducer('carts', cartsReducer, { items: [] });

config.setGraphQLEndpoint('https://core-graphql.dev.waldo.photos/pizza');

export default Main;
