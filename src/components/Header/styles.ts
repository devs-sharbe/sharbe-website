import styled from 'styled-components';

import { fonts } from '@/styles/theme/fonts';

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 1.5rem;

  position: absolute;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-family: ${fonts.secondary};
  font-weight: 700;
  color: ${({ theme }) => theme.logo_text};

  display: flex;
  align-items: center;

  > svg {
    margin-right: 1rem;
  }
`;

export const ContactContent = styled.div`
  display: flex;

  nav {
    a {
      font-size: 1.125rem;
      font-family: ${fonts.tertiary};
      color: ${({ theme }) => theme.shape};
      margin-right: 1.75rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
