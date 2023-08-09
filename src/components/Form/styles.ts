import { css, styled } from 'styled-components';

import tokens from '@/styles/tokens';

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ButtonForm = styled.button<{ $variants: 'primary' | 'secondary' }>`
  ${({ $variants }) =>
    $variants === 'primary'
      ? css`
          background: ${tokens.colors.primary_shade};
          color: ${tokens.colors.light_tint};
          margin-top: 12px;
        `
      : css`
          background: ${tokens.colors.light_tint};
          color: ${tokens.colors.dark};
          border: 1px solid ${tokens.colors.light_shade};
        `}
  width: 100%;
  padding: 12px 0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  &:disabled {
    background: ${tokens.colors.light};
    color: ${tokens.colors.dark_tint};
    cursor: not-allowed;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
export const Content = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;

  h1 {
    color: ${tokens.colors.dark_shade};
    font-weight: ${tokens.fontWeights.bold};
    font-size: ${tokens.fontSizes.xl};
    font-family: ${tokens.fontFamily._montserrat};
  }

  p {
    font-size: ${tokens.fontSizes.md};
    font-weight: ${tokens.fontWeights.normal};
    color: ${tokens.colors.dark};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const ContentLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  a {
    color: ${tokens.colors.dark};
    font-size: ${tokens.fontSizes.xs};
    font-weight: ${tokens.fontWeights.normal};
  }
`;

export const ButtonViewPassword = styled.button`
  background: transparent;
`;

export const ContainerSocial = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      padding: 0 12px;
      color: ${tokens.colors.dark};
    }

    > div {
      width: 183px;
      height: 1px;
      background: ${tokens.colors.light};
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 48px;

  p {
    color: ${tokens.colors.dark};

    a {
      color: ${tokens.colors.primary_shade};
      margin-left: 4px;
    }
  }
`;
