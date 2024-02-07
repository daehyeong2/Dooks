export const usePreventLeave = () => {
  const Listner = (event) => {
    event.preventDefault();
    event.returtnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", Listner);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", Listner);
  return { enablePrevent, disablePrevent };
};
