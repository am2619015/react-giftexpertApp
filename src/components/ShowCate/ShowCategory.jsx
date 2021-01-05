import React from 'react';
import {MDBContainer,MDBRow,MDBAnimation} from 'mdbreact';
import PropTypes from 'prop-types';
import GiftGrid from './GiftGrid';

import {useFetchGifs} from '../hooks/useFetchGifs';


const ShowCategory = ({category}) =>{

    const {data:images,loading:loading_image} = useFetchGifs(category);

    const construct_images = () => (<MDBAnimation type="zoomIn"><MDBContainer className="mt-2 mb-5"><MDBRow className="mt-4">{images.map( (v) => <GiftGrid key={v.id} {...v} /> )}</MDBRow></MDBContainer><hr/></MDBAnimation>);

    return (<>
        <h3 className="text-center">{category}</h3>
        {!loading_image?
            construct_images()
        :
        <div className="w-100  text-center">
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        } 
    </>)
}

ShowCategory.propTypes ={
    category : PropTypes.string.isRequired
}

export default ShowCategory;


