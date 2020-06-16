import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

export const DishComments = (props) => {

    const comments = props.comments.map((comment) => {
        return (
            <div>
                <p>
                    {comment.comment}
                </p>
                <br />
                <p>-- {comment.author}, {(comment.date).substring(0, 10)}</p>
            </div>
        );
    });
    return (
        <div >
            <h4>Comments</h4>
            {comments}
        </div>
    );


}

export default DishComments;