export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState((prev) => ({
      ...prev,
      loading: true,
      data: null,
    }));
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState((prev) => ({
          ...prev,
          loading: false,
          data,
        }));
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          loading: false,
          error,
        }));
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
