import React , { Component } from 'react';
import Poster from './Poster';
import { Row, Col } from 'react-simple-flex-grid';

import "react-simple-flex-grid/lib/main.css";

export default class MovieList extends Component{

    render() {
    

        let movies = this.props.movies.map(function(movie) {
            if (movie.Poster==="N/A")
                movie.Poster='/notFoundPoster.jpg';
            return(
                <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                    <Poster info id={movie.id} path={movie.Poster} title={movie.Title} release_date={movie.Year} responsive />
                </Col>
            );
        });

        return(
            <div className="content-grid" fluid={false}>
                <Row justify="center" gutter={80}>
                    {movies}
                </Row>
            </div>
        );
    }
}
