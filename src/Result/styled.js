import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 17% 1fr;
    margin-top: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 100%;
    }
`;