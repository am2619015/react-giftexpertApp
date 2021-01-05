import {useEffect, useState} from 'react';
import { getGifts } from '../helpers/getGifsAxios';
import {showMsg} from '../base_general';

export const useFetchGifs = (category) =>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    /// component did mount o update on category value
    useEffect(()=>{ 
        showMsg("Componente  useFetchGifs montado");
        getGifts(category).then(img=>{
            if(img!==null){
                showMsg("data cargada");
                setstate({
                    data: img,
                    loading:false
                });
            }
        })
    },[category]);


        // componente will unmount
    useEffect( () => () =>{
            showMsg("Componente  useFetchGifs desmontado");
            setstate({
                data: [],
                loading:true
            });
        }, [category] );

    return state; // {data:[], loading:true}
}


 /////// use Effects posibles ////
// useEffect( () => console.log("mount"), [] );
// useEffect( () => console.log("will update data1"), [ data1 ] );
// useEffect( () => console.log("will update any") );
// useEffect( () => () => console.log("will update data1 or unmount"), [ data1 ] );
// useEffect( () => () => console.log("unmount"), [] );


// el siguiente comentario es necesario para funciones que son llamadas en el hook de componentdidMount pero que son usadas afuera tambien, en caso contrario 
// deberian ser creadas dichas funciones dentro del clousere de useEffect (A)
// (A) -----eslint-disable-next-line react-hooks/exhaustive-deps-----