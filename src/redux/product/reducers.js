import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, SINGLE_PRODUCT } from "../actions";

const initialState = {
  products: [],
  singleProduct: {},
  formRoute: ""
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
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };
    case DELETE_PRODUCT:
      console.log("action.payload", action.payload)      
      return {
        ...state,
        products: action.payload
      };
    case SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload.data,
        formRoute: action.payload.route
      };

    default:
      return { ...state };
  }
};
