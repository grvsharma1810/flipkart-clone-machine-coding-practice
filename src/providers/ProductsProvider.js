import { createContext, useContext, useReducer } from "react";
import { IdealForGenderData, SizeData } from "../data/products-data";
import {
    productsReducer,
    SORT_BY_PRICE,
    ONLY_FAST_DELIVERY,
    INCLUDE_OUT_OF_STOCK,
    SEARCH_INPUT
} from "../reducers/products-reducer";

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, {
        gender : null,
        sortByPrice : null,
        size : [],
        brand : []
    });

    return (
        <ProductsContext.Provider value={{ productsState: state, productsDispatch: dispatch }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => {
    return useContext(ProductsContext);
}