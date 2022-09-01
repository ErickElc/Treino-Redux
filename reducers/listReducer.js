const listReducer = (state = ['item Padrão'], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return[...state, action.payload];
    
        default:
            return state;
    }
}


module.exports = {listReducer};