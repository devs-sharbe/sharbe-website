import styled from 'styled-components';

import { fonts } from '@/styles/theme/fonts';

export const Container = styled.main`
  section {
    padding: 9.5625rem 0 11.6875rem;
    background: ${({ theme }) => theme.contact.background};

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 3.5rem;
      font-family: ${fonts.secondary}, sans-serif;
      color: ${({ theme }) => theme.contact.heading};
      text-align: center;

      max-width: 612px;
    }

    p {
      font-size: 1.25rem;
      font-family: ${fonts.primary}, sans-serif;
      color: ${({ theme }) => theme.contact.description};
      text-align: center;
      line-height: 1.75rem;

      max-width: 700px;
      margin-top: 2rem;
    }
  }
`;

export const ContactBox = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: -7.25rem auto 0;

  display: flex;
  height: 500px;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
`;

export const ContactForm = styled.div`
  background-color: ${({ theme }) => theme.contact.box_background};
  width: 700px;
  border-radius: 0.75rem 0 0 0.75rem;
  padding: 3rem 2rem;
`;

export const ContactFormTitleContent = styled.div`
  display: flex;

  h3 {
    font-size: 1.5rem;
    font-family: ${fonts.secondary}, sans-serif;
    color: ${({ theme }) => theme.contact.title};
  }

  > svg {
    margin-left: 0.75rem;
  }
`;

export const ContactInformation = styled.div`
  background-color: ${({ theme }) => theme.contact.blue};
  width: 100%;
  max-width: 420px;
  padding: 3rem 2rem;

  h3 {
    font-size: 1.5rem;
    font-family: ${fonts.secondary}, sans-serif;
    color: ${({ theme }) => theme.contact.heading};
  }
`;

export const ContactInformationList = styled.ul`
  margin-top: 3rem;
  list-style: none;
`;

export const ContactInformationListItem = styled.li`
  color: ${({ theme }) => theme.contact.heading};
  font-size: 1rem;
  font-family: ${fonts.primary}, sans-serif;

  a {
    display: flex;
    align-items: center;
    color: inherit;

    > svg {
      margin-right: 0.75rem;
    }
  }

  span {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 0.75rem;
    }
  }

  & + li {
    margin-top: 2rem;
  }
`;
