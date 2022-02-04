import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>);
})

// Note: unlike shallow or static rendering, full rendering 
// actually mounts the component in the DOM, which means that 
// tests can affect each other if they are all using the same 
// DOM. Keep that in mind while writing your tests and, if 
// necessary, use .unmount() or something similar as cleanup.
afterEach(() => {
    wrapped.unmount(<CommentBox />)
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});


// simulating a change event to make the text area think a user 
// has typed in the text box using 
// .simulate(event[, mock] => Self)
describe('the text area', () => {
    beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
        });
    wrapped.update();
    });

    it('has a text area that users can type in', () => {
// Force component to rerender so a new value is shoved into the 
// text area using .update() and .prop(key)
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});