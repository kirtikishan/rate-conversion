import {combineReducers} from 'redux';

//HERE IMPORT REDUCERS TO BE COMBINED.

import {getQuoteReducer} from './GetQuoteReducer';

export default combineReducers({
    quoteRateData: getQuoteReducer,
});