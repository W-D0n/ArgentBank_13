/**
 * a function to clear both stores on logout.
 * @memberof redux
 * @function
 */
export const clearStorage = () => {
  window.sesessionStorage.clear();
  window.localStorage.clear();
};