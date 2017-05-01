
//"state" no es el estado de la aplicación, solo el estado del componente que éste reducer es responsable
export default function (state = null, action){
 switch(action.type) {
   case 'BOOK_SELECTED':
    return action.payload;
 }

  return state
}



