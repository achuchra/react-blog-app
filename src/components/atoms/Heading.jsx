import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.l : theme.fontSize.m)};
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 10px;
`;

export default Heading;
