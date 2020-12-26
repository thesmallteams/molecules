import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  /*  One single function to toggle isOpen 
    const toggle = () => {
    setIsOpen(!isOpen);
  }; */

  function toggle() {
    setIsOpen(!isOpen);
  }

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return { isOpen, onOpen, onClose, toggle };
};

export default useModal;
