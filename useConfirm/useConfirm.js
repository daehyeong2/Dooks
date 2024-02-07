export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else if (onCancel && typeof onCancel === "function") {
      onCancel();
    }
  };
  return confirmAction;
};
