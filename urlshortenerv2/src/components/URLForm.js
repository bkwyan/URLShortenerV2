import React from 'react';

import {
    URLFormContainer,
    Header,
    FormContainer,
    Form,
    SubmitButton,
} from './styles/URLFormStyle';

const URLForm = () => {
    return(
        <URLFormContainer>
            <Header>I Hate Long URLs</Header>
            <FormContainer>
                <Form placeholder='Paste your url...' size='70'/>
                <SubmitButton/>
            </FormContainer>
        </URLFormContainer>
    )
};

export default URLForm;