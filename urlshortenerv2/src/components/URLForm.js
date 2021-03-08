import React, { useState } from 'react';


import {
    URLFormContainer,
    Header,
    FormContainer,
    Form,
    SubmitButton,
} from './styles/URLFormStyle';

const URLForm = ({onSubmit}) => {

    const[url, setUrl] = useState('');

    const onKeyUpHandler = (e) => {
        if(e.keyCode === 13){
            onSubmit(url);
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
                    onChange={event => setUrl(event.target.value)}
                    onKeyUp={onKeyUpHandler}
                />
            </FormContainer>
        </URLFormContainer>
    )
};

export default URLForm;