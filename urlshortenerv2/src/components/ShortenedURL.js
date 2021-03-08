import React, { useState } from "react";

import {
  ShortenedURLContainer,
  Row,
  FullUrlColumn,
  ShortenedURLColumn,
  CopyColumn,
} from "./styles/ShortenedURLStyle";

const ShortenedURL = (props) => {
  return (
    <ShortenedURLContainer>
      <Row>
        <FullUrlColumn>{props.fullURL}</FullUrlColumn>
        <ShortenedURLColumn>{props.shortURL}</ShortenedURLColumn>
        <CopyColumn>Copy</CopyColumn>
      </Row>
    </ShortenedURLContainer>
  );
};

export default ShortenedURL;
