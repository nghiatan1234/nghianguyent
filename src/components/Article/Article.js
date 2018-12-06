import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const Article = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 portfolio-item">
            <div className="card">
                <Link to={`/article/${props.index}`}>
                    <img className="card-img-top" src={props.image} alt="" />
                </Link>

                <div className="card-body">
                    <div className="product-rating text-center">
                        <ul>
                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                        </ul>
                    </div>
                    <h4 className="card-title">
                        <p className="text-center product-name">{props.name}</p>
                        <p className="text-center">&#36; {props.price}</p>
                    </h4>
                    <div className="row">
                        <div className="col">
                            <a className="btn btn-success btn-block">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Article;