export const selectLibrary = libraryId => {
  return {
    type: "select_libraray",
    payload: libraryId
  };
};
