import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "../actions";

const initialState = {
  products: [
    
  ],
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload].filter(
          (product) => product.name !== action.payload.name
        ),
      };

    default:
      return { ...state };
  }
};
