import styled from 'styled-components';

import { fonts } from '@/styles/theme/fonts';

export const Container = styled.div`
  width: 100%;
  max-width: 664px;
  min-height: 580px;
  padding: 0 3rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
  background: ${({ theme }) => theme.box_tech_background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 3rem;
    font-family: ${fonts.secondary};
    font-weight: 700;
    color: ${({ theme }) => theme.box_tech_title};
    line-height: 3.75rem;
    text-align: center;
  }

  p {
    font-size: 1.25rem;
    font-family: ${fonts.primary};
    color: ${({ theme }) => theme.shape};
    line-height: 1.875rem;
    text-align: center;

    margin-top: 2rem;
  }

  @media (max-width: 992px) {
    max-width: 600px;

    h3 {
      font-size: 2.5rem;
      line-height: 3.25rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const TechnologiesIcons = styled.div`
  margin-top: 3.75rem;
`;
