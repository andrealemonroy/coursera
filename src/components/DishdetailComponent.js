import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

 export const DishDetail = (props) => {

    return (
        <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardText>{props.description}</CardText>
        </CardBody>
    )

}
