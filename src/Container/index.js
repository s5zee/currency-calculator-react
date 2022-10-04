import { StyledContainer } from './styled';

const Container = ({ body, extraContent, date }) => (
    <StyledContainer>
        {date}
        {body}
        {extraContent}
    </StyledContainer>
);

export default Container;