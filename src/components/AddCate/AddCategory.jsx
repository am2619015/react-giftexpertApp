import React,{useState} from 'react';
import {MDBCol,MDBFormInline,MDBIcon} from 'mdbreact';
import PropTypes from 'prop-types';
import './category.css';

const AddCategory = ({response}) =>{

    const [inputSearch,setInputSearch] = useState('');

    const handleSubmitCat = (e) =>{
        e.preventDefault();
        response(inputSearch,setInputSearch); // se envia el valor del input y el set para limpiarlo una vez ingresado 
    }

    return(
        <MDBCol md="8" className="mx-auto">
                <MDBFormInline id="formulario_search" className="md-form" onSubmit={handleSubmitCat}>
                    <MDBIcon icon="search" className="search_icon" onClick={handleSubmitCat}/>
                    <input className="form-control form-control-sm ml-3 pl-2 w-75" id="input_search" 
                        onChange={(e) => setInputSearch(e.target.value)} 
                        value={inputSearch}
                        type="text" placeholder="Buscar" aria-label="Search" />
                </MDBFormInline>
        </MDBCol>
    )
}

AddCategory.propTypes = {
    response: PropTypes.func.isRequired,
}

export default AddCategory;