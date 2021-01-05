import React from 'react'
import {MDBCol,MDBView,MDBMask} from 'mdbreact';

const GiftGridItem = ( {title,url} ) => {
    
    return (
            <MDBCol size="6" md="4">
                <MDBView hover zoom>
                <img
                    src={url}
                    className="img-fluid"
                    alt={title}
                />
                <MDBMask pattern={5} className="flex-center">
                    <p className="white-text"></p>
                </MDBMask>
                </MDBView>
            </MDBCol>
)
}

export default GiftGridItem;
