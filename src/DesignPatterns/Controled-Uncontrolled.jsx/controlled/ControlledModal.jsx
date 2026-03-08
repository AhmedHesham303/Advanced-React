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
function ControlledModal({ children, show, onClose }) {
  return (
    <>
      {show && (
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>Hide modal</button>

            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
}

export default ControlledModal;
