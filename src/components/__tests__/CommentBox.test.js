import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
})

// Note: unlike shallow or static rendering, full rendering actually
// mounts the component in the DOM, which means that tests can affect each // other if they are all using the same DOM. Keep that in mind while
// writing your tests and, if necessary, use .unmount() or something
// similar as cleanup.
afterEach(() => {
    wrapped.unmount(<CommentBox />)
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})