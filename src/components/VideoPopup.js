import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

// Define a styled component for the video modal
const StyledVideoModal = styled(Modal)`
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.modalBackground};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  top: 5rem;
`;

const CloseButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #eb108d;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const VideoEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
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

const VideoPopup = ({ isOpen, onClose, videoUrl, isDarkMode }) => {
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <StyledVideoModal isOpen={isOpen} onRequestClose={onClose} theme={theme}>
      <VideoContainer>
        <VideoEmbed
          src={videoUrl}
          title="Embedded Video"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></VideoEmbed>
      </VideoContainer>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </StyledVideoModal>
  );
};

export default VideoPopup;
