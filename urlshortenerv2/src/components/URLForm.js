import React, { useState } from 'react';


import {
    URLFormContainer,
    Header,
    FormContainer,
    Form,
    SubmitButton,
} from './styles/URLFormStyle';

const URLForm = ({handleURL, onSubmit}) => {

    const[url, setUrl] = useState('');
    const[showShortenedURL, setShowShortenedURL] = useState('');
    const[hash, setHash] = useState('');
    const[shortenedURL, setShortenedURL] = useState('');

    const onKeyUpHandler = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    return(
        <URLFormContainer>
            <Header>I Hate Long URLs</Header>
            <FormContainer>
                <Form 
                    type='text'
                    placeholder='Paste your url...' 
                    size='70'
                    onChange={event => handleURL(event.target.value)}
                    onKeyUp={onKeyUpHandler}
                />
                <SubmitButton
                    onClick={onSubmit}
                />
            </FormContainer>
        </URLFormContainer>
    )
};

export default URLForm;