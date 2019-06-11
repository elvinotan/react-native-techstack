import { select_library } from "../actions/actions";

export default (state = null, action) => {
  if (action.type === select_library) {
    return { ...state, selectedLibraryId: action.payload };
  }

  return state;
};
