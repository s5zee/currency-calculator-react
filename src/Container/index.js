import { StyledContainer } from './styled';

const Container = ({ body, date }) => (
    <StyledContainer>
        {date}
        {body}
    </StyledContainer>
);

export default Container;