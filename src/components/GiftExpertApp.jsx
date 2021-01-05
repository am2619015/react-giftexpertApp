import React,{useState,useEffect} from 'react';
import {showMsg} from './base_general';
import AddCategory from './AddCate/AddCategory';
import ShowCategory from './ShowCate/ShowCategory';

const GiftExpertApp = () =>{
    
    //showMsg("iniciado con apikey "+api_key_gift);

    const [categorias,setCategorias] = useState(['Batman']);

    const get_categorias = () => categorias.map((v,k)=><ShowCategory key={v} category={v}/>); // por alguna razon no renderiza correctamente si el key no es distinto al index sino el contenido o un titulo
    

    useEffect( () => () =>{
        showMsg("Componente GiftExpertApp desmontado");
        setCategorias([]);
    }, [] );


    //// callback llamado para agregar, esto sucede desde el AddCategory que retorna un string con el valor a agregar

    const handleAdd = (inputSearch,setInputSearch) =>{
        if(inputSearch.trim().localeCompare('')!==0){

            showMsg("Agregando ");
            setCategorias([inputSearch,...categorias]);
            setInputSearch('');
            showMsg("Agregado correctamente");

        }else{
            setInputSearch('');
        }
    }




    return ( <>
            <h2 className="text-center w-100">Gift expert APP</h2>
            <hr/>
            <AddCategory response={handleAdd} />
            <hr/>
            <div className="w-100 mx-auto mb-5">
                {get_categorias()}
            </div>
            </>);
}

export default GiftExpertApp;
