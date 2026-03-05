import { useState } from "react";
import styled from "styled-components";
const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  overflow: auto;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 40rem;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Modal({ children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  return (
    <>
      <button onClick={handleOpen}>Show Modal</button>
      {show && (
        <ModalBackground onClick={handleClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClose}>Hide modal</button>

            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
}

export default Modal;
