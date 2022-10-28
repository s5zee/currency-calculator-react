import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    border: none;
    background-color: hsl(180, 100%, 25%);
    color: hsl(0, 0%, 100%);
    padding: 5px;
    border-radius: 5px;

    &:hover {
        background-color: hsl(180, 100%, 32%);
    }

    &:active {
        background-color: hsl(180, 100%, 37%);
    }
`;