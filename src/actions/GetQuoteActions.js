import axios from 'axios';

//Get quote
export function getQuote(fromCurrency, toCurrency, amount) {
    return function (dispatch) {
        const serviceURL = `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json`;
        axios.get(serviceURL)
            .then(function (response) {
                dispatch({type: 'GET_QUOTE', payload: {
                    data: response.data,
                    fromCurrency: fromCurrency,
                    fromAmount: amount
                }
              });

              dispatch({type: 'HIDE_LOADER'});
            })
            .catch(function (error) {
                dispatch({type: 'GET_QUOTE_REJECTED', payload: error});
            })
    }
}

export const resetQuote = () => ({
    type: 'RESET_QUOTE'
});

export const showLoader = () => ({
    type: 'SHOW_LOADER'
});
