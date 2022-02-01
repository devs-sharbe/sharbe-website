import styled from 'styled-components';

import { fonts } from '@/styles/theme/fonts';

interface ILogoProps {
  isContactPage: boolean;
}

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

  @media (max-width: 1200px) {
    padding: 0 1.5rem;
  }
`;

export const Logo = styled.a<ILogoProps>`
  font-size: 1.5rem;
  font-family: ${fonts.secondary};
  font-weight: 700;
  color: ${({ isContactPage, theme }) =>
    isContactPage ? theme.logo_text_contact_page : theme.logo_text};

  display: flex;
  align-items: center;

  > svg {
    margin-right: 1rem;
  }
`;

export const LogoText = styled.span`
  @media (max-width: 425px) {
    display: none;
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

  a {
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
