import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './components/App/App';
import PersonalAccountStore from './store';

export const StoreContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContext.Provider value={{
    store: new PersonalAccountStore()
  }}>
    <App />
  </StoreContext.Provider>
);
