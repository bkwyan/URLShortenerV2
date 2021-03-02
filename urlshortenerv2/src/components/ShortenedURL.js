import React, { useState } from "react";

import {
  ShortenedURLContainer,
  Row,
  FullUrlColumn,
  ShortenedURLColumn,
  CopyColumn,
} from "./styles/ShortenedURLStyle";

const ShortenedURL = () => {
  return (
    <ShortenedURLContainer>
      <Row>
        <FullUrlColumn>Some Full URL</FullUrlColumn>
        <ShortenedURLColumn>Some Shortened URL</ShortenedURLColumn>
        <CopyColumn>Copy</CopyColumn>
      </Row>
    </ShortenedURLContainer>
  );
};

export default ShortenedURL;
