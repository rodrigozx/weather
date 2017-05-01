
export function selectBook(book){
    // console.log('libro seleccionado', book.title);
    //selectBook es un ActionCreator, necesita retornar alguna accion
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
} 