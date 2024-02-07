export const useFullscreen = (callback) => {
  const element = useRef();
  const [fullscreen, setFullscreen] = useState(
    document.fullscreenElement ? true : false
  );
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (document.fullscreenElement) {
      return;
    }
    if (element.current) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    }
    runCb(true);
  };
  const exitFull = () => {
    if (!document.fullscreenElement) {
      return;
    }
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  const toggleFull = () => {
    if (fullscreen) {
      exitFull();
      setFullscreen(false);
    } else {
      triggerFull();
      setFullscreen(true);
    }
  };
  return { element, triggerFull, exitFull, toggleFull, isFull: fullscreen };
};
