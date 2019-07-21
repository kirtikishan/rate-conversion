export function getQuoteReducer(state = {
    quoteRateData: null,
    isLoading: false

}, action) {
    switch (action.type) {
        case 'GET_QUOTE':
            return {...state, quoteRateData: {...action.payload}};
        case 'RESET_QUOTE':
            return {...state, quoteRateData: null}
        case 'SHOW_LOADER': 
            return {...state, isLoading: true}
        case 'HIDE_LOADER': 
            return {...state, isLoading: false}
    };
    return state;
};
