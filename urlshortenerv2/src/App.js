import React, { useState } from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import URLForm from './components/URLForm';

const App = () => {

  const[url, setUrl] = useState('');
  const[showShortenedURL, setShowShortenedURL] = useState('');
  const[hash, setHash] = useState('');
  const[shortenedURL, setShortenedURL] = useState('');

  const onSubmit = () =>{
    // Fetch API to create new API
    // Pass in URL
    // Set the hash, set the shortenedURL, and setShowShortenedURL
  }

  return (
    <>
      <GlobalStyle/>
      <URLForm
        handleURL={setUrl}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default App;
