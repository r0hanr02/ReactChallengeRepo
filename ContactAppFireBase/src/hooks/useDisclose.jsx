import  { useState } from "react";

const useDisclose = () => {
  const [isOpen, setisOpen] = useState(false);

  function onOpen() {
    setisOpen(true);
  }
  function onClose() {
    setisOpen(false);
  }

  return { isOpen, onClose, onOpen };
};

export default useDisclose;
