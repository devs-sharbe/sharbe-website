import styled from 'styled-components';

import { fonts } from '@/styles/theme/fonts';

export const Container = styled.footer`
  max-width: 1120px;
  margin: 17.5rem auto 0;

  @media (max-width: 1200px) {
    padding: 0 1.5rem;
  }
`;

export const SocialNetworksAndPolicies = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const SocialNetworks = styled.div`
  > svg {
    color: ${({ theme }) => theme.shape};

    & + svg {
      margin-left: 1rem;
    }
  }
`;

export const Policies = styled.div`
  a {
    font-size: 0.875rem;
    font-family: ${fonts.primary};
    color: ${({ theme }) => theme.shape};

    & + a {
      margin-left: 1rem;
    }
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    a:first-child {
      margin: 1rem 0;
    }
  }
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.625rem 0 2rem;
  background-color: ${({ theme }) => theme.divisor};

  @media (max-width: 425px) {
    margin-top: 2rem;
  }
`;

export const BusinessAndTheme = styled.div`
  padding-bottom: 4.5rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Business = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1rem;

  span {
    font-size: 1.25rem;
    font-family: ${fonts.secondary};
    font-weight: 700;
    color: ${({ theme }) => theme.footer_title};
  }

  p {
    font-size: 0.9375rem;
    font-family: ${fonts.primary};
    color: ${({ theme }) => theme.shape};
    line-height: 1.25rem;
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-right: unset;

    p {
      margin: 1.5rem 0;
      text-align: center;
    }
  }
`;

export const Theme = styled.div`
  display: flex;
`;

export const SelectContent = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  width: 140px;
  background-color: ${({ theme }) => theme.select_theme_background};

  position: relative;

  transition: filter 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  select {
    border: 0;
    background-color: transparent;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 2rem;
    padding-left: 2.625rem;
    height: 100%;
    width: 100%;
    cursor: pointer;
    z-index: 15;

    font-size: 0.9375rem;
    font-family: ${fonts.primary};
    font-weight: 500;
    color: ${({ theme }) => theme.select_theme_color};

    option {
      color: ${({ theme }) => theme.select_theme_color};
      background-color: ${({ theme }) => theme.select_theme_background};
    }
  }
`;

export const SelectIconLeft = styled.span`
  font-size: 0;
  color: ${({ theme }) => theme.select_theme_color};

  position: absolute;
  left: 0;
  padding-left: 0.5rem;
`;

export const SelectIconRight = styled.span`
  font-size: 0;
  color: ${({ theme }) => theme.select_theme_arrow_color};

  position: absolute;
  right: 0;
  padding-right: 0.5rem;
`;

export const UpButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.button_up_background};
  margin-left: 1rem;

  transition: filter 0.2s;

  > svg {
    color: ${({ theme }) => theme.button_up_color};
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
