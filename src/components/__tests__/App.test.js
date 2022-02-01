import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// declare variable outside of scope so it can be accesed multiple times
let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows a comment box', () => {
    // Using wrapped since its frequently used in the enzyme documention
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});