import { ModalBox, StyledModal } from './Modal.styled';

export const Modal = ({ visible, gallery }) => {
  console.log(gallery);
  return (
    <ModalBox onClick={visible}>
      <StyledModal>
        <img src={gallery.largeImageURL} alt="" />
      </StyledModal>
    </ModalBox>
  );
};
