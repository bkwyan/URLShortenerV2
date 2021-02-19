import React, { useState } from 'react';

import {
    URLTableContainer,
    Row,
    FullUrlColumn,
    ShortenedURLColumn,
    CopyColumn,

} from './styles/URLTableStyle';

const URLTable = () => {

    return(
        <URLTableContainer>
            <Row>
                <FullUrlColumn>
                    Some Full URL
                </FullUrlColumn>
                <ShortenedURLColumn>
                    Some Shortened URL
                </ShortenedURLColumn>
                <CopyColumn>
                    Copy
                </CopyColumn>
            </Row>
            <Row>
                <FullUrlColumn>
                    Some Full URL
                </FullUrlColumn>
                <ShortenedURLColumn>
                    Some Shortened URL
                </ShortenedURLColumn>
                <CopyColumn>
                    Copy
                </CopyColumn>
            </Row>
            <Row>
                <FullUrlColumn>
                    Some Full URL
                </FullUrlColumn>
                <ShortenedURLColumn>
                    Some Shortened URL
                </ShortenedURLColumn>
                <CopyColumn>
                    Copy
                </CopyColumn>
            </Row>
        </URLTableContainer>
    );
};

export default URLTable;