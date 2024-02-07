export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  useEffect(() => {
    const titleElement = document.querySelector("title");
    titleElement.innerText = title;
  }, [title]);
  return { changeTitle: setTitle };
};
