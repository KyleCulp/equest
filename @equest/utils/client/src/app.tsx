import { createBrowserHistory } from 'history';
import React, { useEffect, useState } from 'react';

// import { setAccessToken } from '@Utils/Authentication';

// import { Routes } from './Routes/Routes';

type Props = {};

export const history = createBrowserHistory();

const App: React.FC<Props> = () => {
  return (
    // Empty shell rn
    // <Routes {...props} />
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
