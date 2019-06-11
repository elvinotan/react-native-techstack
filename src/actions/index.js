import { select_library } from "./actions";

export const selectLibrary = libraryId => {
  return {
    type: select_library,
    payload: libraryId
  };
};
