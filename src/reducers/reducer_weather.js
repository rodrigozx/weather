import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
    // console.log('Action recived', action);
    switch (action.type){

        case FETCH_WEATHER:
            //cuando busco la ciudad agrego la información a la lista.
            
            // Dos maneras identicas en resultado. Crea un nuevo array y lo devuelve.
            // return state.concat([action.payload.data]); //1 - vanilla
            return [action.payload.data, ...state];     //2 - en emascript6
    }
    return state;
}