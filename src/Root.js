/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// Any component inside the app that needs access to the redux 
// store can use this function.

// This allows us to create a Provider tag
// with the redux store.
// And on the fly we can swap the component that will
// be placed in the provider tag.
export default ({ children, intitialState = {} }) => {
    return (
        <Provider store={createStore(reducers, intitialState)}>
            {children}
        </Provider>
    );
};