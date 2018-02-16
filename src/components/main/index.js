import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Helmet from 'react-helmet';

import { Home, WhenNotFound } from 'components/routes';

export default () => (
  <div>
    <Helmet>
      <title>Pizza Lover</title>
      <meta name="description" content="Pizza lover mini test app" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={WhenNotFound} />
    </Switch>
  </div>
);
