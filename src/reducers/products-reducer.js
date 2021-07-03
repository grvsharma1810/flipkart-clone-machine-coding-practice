export const SORT_BY_PRICE = 'sortByPrice';
export const SET_BRAND = 'setBrand';
export const SET_GENDER = 'setGender'
export const SET_SIZE = 'setSize';
export const REMOVE_SIZE = 'removeSize';
export const REMOVE_BRAND = 'removeBrand';
export const CLEAR_FILTERS = 'clearFilters'

export const productsReducer = (state, action) => {
    switch (action.type) {
        case SORT_BY_PRICE:
            return { ...state, sortByPrice: action.payload.value }

        case SET_BRAND:
            return { ...state, brand: [...state.brand, action.payload.value.brand] }

        case REMOVE_BRAND:
            return { ...state, brand: state.brand.filter(brand => brand !== action.payload.value.brand) }

        case SET_GENDER:
            return { ...state, gender: action.payload.value }

        case SET_SIZE:
            return { ...state, size: [...state.size, action.payload.value.size] }

        case REMOVE_SIZE:
            return { ...state, size: state.size.filter(size => size !== action.payload.value.size) }

        case CLEAR_FILTERS:
            return {
                ...state,
                gender: null,
                sortByPrice: null,
                size: [],
                brand: []
            }

        default:
            return state;
    }
}