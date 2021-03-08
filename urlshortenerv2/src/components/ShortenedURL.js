import React, { useState } from "react";

import {
  ShortenedURLContainer,
  Row,
  FullUrlColumn,
  ShortenedURLColumn,
  CopyColumn,
  ShortURL,
  CopyButton
} from "./styles/ShortenedURLStyle";

// const onURLClick = () =>{
//   // Fetch API to direct to link
//   const {data} = axios({
//     method: 'post',
//     url: 'http://localhost:8080',
//     data: {
//       url: fullURL
//     }
//   })
//   .then(response => addURL(fullURL, response.data));
// }

const ShortenedURL = (props) => {
  return (
    <ShortenedURLContainer>
      <Row>
        <FullUrlColumn>{props.fullURL}</FullUrlColumn>
        <ShortenedURLColumn>
          <ShortURL href={"http://" + props.shortURL}>
            {props.shortURL}
          </ShortURL>
        </ShortenedURLColumn>
        <CopyColumn>
          <CopyButton onClick={() => {
            navigator.clipboard.writeText(props.shortURL)
          }}>
            Copy
          </CopyButton>
        </CopyColumn>
      </Row>
    </ShortenedURLContainer>
  );
};

export default ShortenedURL;
