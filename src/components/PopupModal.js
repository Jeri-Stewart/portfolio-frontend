import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

// Define a styled component for the modal
const StyledModal = styled(Modal)`
  width: 800px;
  height: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${(props) => props.theme.modalBackground};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  top:10rem;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #EB108D;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;


const Gif = styled.img`
  max-width: 200px; 
  width: 100%; 
  height: auto; 
 
`;

const Title = styled.h2`
  color: ${(props) => (props.isDarkMode ? "#95F1D8" : "#757bc8")};
  font-size: 24px;
`;


const Text = styled.p`
  color: ${(props) => {
    console.log("isDarkMode:", props.isDarkMode);
    return props.isDarkMode ? "#ececec" : "#667";
  }};
`;

// Define themes for dark and light modes
const darkTheme = {
  modalBackground: "#240046",
  buttonBackground: "#95F1D8",
};

const lightTheme = {
  modalBackground: "white", 
  buttonBackground: "#757bc8",
};


const PopupModal = ({ isOpen, onClose, title, gifSrc, text, isDarkMode }) => {
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <StyledModal isOpen={isOpen} onRequestClose={onClose} theme={theme}>
      <Title isDarkMode={isDarkMode}>{title}</Title>
      <Gif src={gifSrc} alt="GIF" />
      <Text isDarkMode={isDarkMode}>{text}</Text>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </StyledModal>
  );
};

export default PopupModal;
