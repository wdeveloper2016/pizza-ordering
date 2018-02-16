import React from 'react';

import { NotFound } from 'kit/lib/routing';

const WhenNotFound = () => (
  <NotFound>
    <h1>Unknown route - the 404 handler was triggered!</h1>
  </NotFound>
);

export default WhenNotFound;
