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
  background-color: ${(props) => props.theme.buttonBackground};
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

// Create styled components for the title, gif, and text

const Gif = styled.img`
  max-width: 200px; 
  width: 100%; 
  height: auto; 
 
`;

const Title = styled.h2`
  color: ${(props) => {
    console.log("isDarkMode:", props.isDarkMode);
    return props.isDarkMode ? "#95F1D8" : "#333";
  }};
  font-size: 24px;
`;

const Text = styled.p`
  color: ${(props) => {
    console.log("isDarkMode:", props.isDarkMode);
    return props.isDarkMode ? "#95F1D8" : "#667";
  }};
`;

// Define themes for dark and light modes
const darkTheme = {
  modalBackground: "#2b2b2b",
  buttonBackground: "#95F1D8",
};

const lightTheme = {
  modalBackground: "white",
  buttonBackground: "#95F1D8",
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
