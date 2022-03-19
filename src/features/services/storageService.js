/**
 * a function to clear both stores on logout.
 * @function
 */
export const clearStorages = () => {
  sessionStorage.clear();
  localStorage.clear();
};