import React from 'react';
import {showMsg} from './base_general';
import GiftExpertApp from './GiftExpertApp';

const Principal = () =>{

    showMsg("iniciado principal");

    const stylo_footer = {
        position: "fixed",
        bottom: "0",
        'backgroundColor':"grey",
        'marginBottom':"0"
      };

      const stylo_header = {
        'backgroundColor':"grey",
      }

      
    return (<>
             <div className="text-center w-100 h5 mb-4" style={stylo_header}>Header</div>
                <GiftExpertApp className="mb-5"/>
             <div className="text-center w-100 h5 mt-4" style={stylo_footer}>Footer</div>   
        </>);
}

export default Principal;