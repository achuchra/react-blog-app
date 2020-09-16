import styled from 'styled-components';
import { device } from 'data/device';

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 15px;

  @media ${device.tabletS} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default GridTemplate;
