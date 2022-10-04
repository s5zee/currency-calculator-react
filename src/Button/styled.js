import styled from "styled-components"

export const StyledButton = styled.button`
    width: 100%;
    border: none;
    background-color: teal;
    color: white;
    padding: 5px;
    border-radius: 5px;

    &:hover {
        background-color: hsl(180, 100%, 32%);
    }

    &:active {
        background-color: hsl(180, 100%, 37%);
    }
`;