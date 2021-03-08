import styled from 'styled-components';

export const ShortenedURLContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const FullUrlColumn = styled.div`
    width: 500px;
    white-space: nowrap;
    overflow: hidden;
`

export const ShortenedURLColumn = styled.div`
    text-align: left;
    margin-left: 50px;
`

export const ShortURL = styled.a`
`

export const CopyColumn = styled.div`
    margin-left: 50px;
`

export const CopyButton = styled.button`
`