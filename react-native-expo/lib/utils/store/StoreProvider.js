// AppProvider.js

import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import reducer from './reducer';

// Create a Redux store using the 'reducer' defined in './reducers'.
const store = createStore(reducer);

// Define a custom provider component that provide access to the Redux store.
// Use this 'Provider' component to make the Redux store accessible to the application,
// with no need for addintional action in app.js
function StoreProvider({ children }) {
  return (
    <ReduxProvider store={store}>
      {/* Render the rest of the app. */}
      {children}
    </ReduxProvider>
  );
}

export  {StoreProvider,};
