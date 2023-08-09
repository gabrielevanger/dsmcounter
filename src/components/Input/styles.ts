import { styled, css } from 'styled-components';

import tokens from '@/styles/tokens';

export const InputRoot = styled.div<{ $maxWidth?: number }>`
  ${({ $maxWidth }) =>
    $maxWidth
      ? css`
          width: ${$maxWidth + 'px'};
        `
      : css`
          width: 100%;
        `}
`;

export const InputGroup = styled.div<{
  $isError: boolean;
  $isDisabled?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 6px;
  background: ${tokens.colors.auxiliary_tint};
  padding: 0px 0.5rem 0px 0.5rem;

  ${({ $isError }) =>
    $isError
      ? css`
          border: 1px solid ${tokens.colors.auxiliary};
        `
      : css`
          border: 1px solid ${tokens.colors.dark_tint};
        `}
  &:focus-within {
    border-color: ${tokens.colors.primary_shade};
  }
`;

export const InputLabel = styled.label`
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.medium};
  line-height: ${tokens.lineHeights._4xl};
  color: ${tokens.colors.dark_shade};
  margin-bottom: 8px;

  span {
    color: ${tokens.colors.auxiliary};
  }
`;

export const InputElement = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

export const InputHelpText = styled.p`
  text-align: right;
  font-size: ${tokens.fontSizes.xs};
  font-weight: ${tokens.fontWeights.normal};
  line-height: ${tokens.lineHeights._4xl};
  color: ${tokens.colors.auxiliary};
`;
