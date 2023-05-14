import styled from '@emotion/styled';

import { ButtonProps } from '@/app/types/ButtonProps';

const dynamicStyle = {
  size: {
    small: {
      height: '32px',
    },
    big: {
      height: '38px',
    },
  },
  space: {
    basic: {
      padding: '10px 16px',
    },
    square: {
      padding: '8px',
    },
  },
};

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  ${({ size }) => (size ? dynamicStyle.size[size] : dynamicStyle.size.small)}
  ${({ space }) => space && dynamicStyle.space[space]}
`;

const PinkPrimary = styled(Button)`
  background: var(--pink);
  color: white;
`;

export { PinkPrimary };
