import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  max-width: 700px;
  line-height: 1.42;
  margin-bottom: 0.6em;
  a {
    color: inherit;
    :hover {
      font-style: italic;
    }
  }
  strong {
    font-weight: 500;
  }
`;
