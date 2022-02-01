/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CommentBox  from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
    return (
        <div>
            <CommentBox />
            <CommentList />
        </div>
    );
};