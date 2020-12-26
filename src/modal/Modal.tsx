import React from "react";
import ReactDOM from "react-dom";
import { Portal } from "react-portal";
import useModal from "./useModal";
import { createContext } from "../utils/createContext";

// Creating the ModalContext using the custom createContext function
const [ModalContextProvider, useModalContext] = createContext({
  strict: true,
  name: "ModalContext",
  errorMessage:
    "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
});
export { ModalContextProvider, useModalContext };

export const Modal = (props) => {
  const { children } = props;

  const modal = useModal(props);

  const context = { ...modal };
  return (
    <ModalContextProvider value={context}>
      {context.isOpen && <Portal>{children}</Portal>}
    </ModalContextProvider>
  );
};

export const ModalOverlay = (props) => {
  const { children } = props;
  return <div className="fixed w-screen h-screen top-0 left-0">{children}</div>;
};

export const ModalContent = (props) => {
  const { children } = props;
  return <div className="flex flex-col relative w-full outline-0"></div>;
};

/* export const ModalHeader = ({ children }) => {
  return <div className="flex flex-0">{children}</div>;
}; */

/* 
export const ModalCloseButton = forwardRef((props, ref) => {
  const { onClick, className, ...rest } = props;
  const { onClose } = useModalContext();

  const _className = cx("chakra-modal__close-btn", className);

  const styles = useStyles();

  return (
    <button
      ref={ref}
      className=""
      onClick={callAllHandlers(onClick, (event) => {
        event.stopPropagation();
        onClose();
      })}
      {...rest}
    />
  );
});
 */
