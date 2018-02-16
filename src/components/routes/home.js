import React from 'react';
import { Grid } from 'semantic-ui-react';

import AllPizzas from 'components/pizza';
import Cart from 'components/cart';

const Home = () => (
  <Grid className="p-t-1" container>
    <Grid.Row columns={2}>
      <Grid.Column>
        <AllPizzas />
      </Grid.Column>
      <Grid.Column>
        <Cart />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Home;
