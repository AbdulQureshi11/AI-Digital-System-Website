import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import homeReducer from '../features/counter/HomeSlice'
import aboutReducer from '../features/counter/AboutSlice'
import serviceReducer from '../features/counter/ServiceSlice'
import productReducer from '../features/counter/ProductSlice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        home: homeReducer,
        about: aboutReducer,
        service: serviceReducer,
        products: productReducer,
    },
})