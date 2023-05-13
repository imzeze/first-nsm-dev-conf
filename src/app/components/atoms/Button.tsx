import styled from '@emotion/styled';

import { ButtonProps } from '@/app/types/ButtonProps';

const dynamicStyle = {
  size: {
    small: {
      height: '32px',
    },
    big: {
      height: '48px',
    },
  },
};

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  ${({ size }) => size && dynamicStyle.size[size]}
`;

const Red = styled(Button)`
  background: red;
  color: white;
  ${({ disable }) => disable && `color: black`};
`;

const Blue = styled(Button)`
  background: blue;
  color: white;
  ${({ disable }) => disable && `color: black`};
`;

export { Blue, Red };
