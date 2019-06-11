import { select_library } from "../actions/actions";

export default (state = null, action) => {
  switch (action.type) {
    case select_library: {
      return { ...state, selectedLibraryId: action.payload };
    }
    default:
      return state;
  }
};
