import axios from 'axios';
import {showMsg,api_key_gift} from '../base_general';

    export const getGifts = async(category) => {
        showMsg("realizando peticion");

        const getRandomInt =(min, max) => (Math.floor(Math.random() * (max - min)) + min);
        let random=getRandomInt(0,200);
        showMsg("random empieza en "+random);
        const url_peticion = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=12&api_key=${api_key_gift}&offset=${random}`;

        try {
            const  resp = await axios(url_peticion);
            const {data} = await resp.data;
    
            //showMsg(data);
            const gifts = data.map((v)=>{
                return {
                    id:v.id,
                    title: v.title,
                    url: v.images?.downsized_medium.url
                }
            });

            showMsg(gifts);
            //setImages(gifts); //migradas a ser consumidas en respuesta then
           // setLoading_image(false);    
            return gifts;
        } catch (error) {
            showMsg("fallo getGift "+error)
            return null;
        }
    }