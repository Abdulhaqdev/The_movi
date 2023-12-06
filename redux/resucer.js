const initialState = 0 

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case'inc': return state + 1 
        case'dec': return state - 1
        case'cus': return state + action.payload
        default: return state;
    }
}