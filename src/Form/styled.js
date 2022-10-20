import styled from "styled-components";

export const Header = styled.h1`
    color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
`;

export const Paragraph = styled.p`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Field = styled.input`
    border: 2px solid darkgreen;
    width: 100%;
    max-width: 500px;
    border-radius: 5px;
`;

export const Container = styled.div`
    display: grid;
    justify-items: center;
    margin: 15px;
    font-family: monospace;
    font-size: small;
`;
export const Span = styled.span`
    display: grid;
    justify-items: center;
    color: teal;
    font-size: large;
`;