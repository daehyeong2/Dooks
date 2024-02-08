export const useLocalStorage = () => {
  const get = (key) => {
    return localStorage.getItem(key);
  };
  const set = (key, value) => {
    localStorage.setItem(key, value);
    return;
  };
  const clear = () => {
    localStorage.clear();
    return;
  };
  const remove = (key) => {
    localStorage.removeItem(key);
    return;
  };
  return { get, set, clear, remove };
};
