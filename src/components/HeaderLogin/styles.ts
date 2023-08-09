import styled from 'styled-components';

import tokens from '@/styles/tokens';

export const HeaderLogin = styled.div`
  width: 100%;
  max-width: 488px;
  background: #dff7ff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  div:first-child {
    padding: 56px 0 0 48px;

    p {
      max-width: 265px;
      margin-top: 40px;
      color: ${tokens.colors.dark_shade};
      font-size: ${tokens.fontSizes._2xl};
      font-weight: ${tokens.fontWeights.normal};
      opacity: 0.7;
    }
  }

  div:last-child {
    background-image: url('/assets/icons/ellipse.svg');
    background-repeat: no-repeat;
    padding-top: 132px;
  }
`;
