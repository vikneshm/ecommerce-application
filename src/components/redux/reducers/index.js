import {combineReducers} from 'redux'
import {productReducer} from '../reducers/productReducer.js'

const reducers = combineReducers({
    allProducts: productReducer,
})

export default reducers