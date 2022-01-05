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

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
`;

export const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.contact.box_background};
  width: 700px;
  border-radius: 0.75rem 0 0 0.75rem;
  padding: 3rem 2rem;

  button {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.125rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.contact.button_background};

    color: ${({ theme }) => theme.contact.button_color};
    font-size: 1rem;
    font-family: ${fonts.secondary}, sans-serif;

    > svg {
      margin-left: 1rem;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
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
    color: ${({ theme }) => theme.contact.title};
  }
`;

export const ContactFormFields = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const ContactInformation = styled.div`
  position: relative;
  overflow: hidden;

  background-color: ${({ theme }) => theme.contact.blue};
  width: 100%;
  max-width: 420px;
  padding: 3rem 2rem;
  border-radius: 0 0.75rem 0.75rem 0;

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

export const SharbeTechnology = styled.span`
  color: ${({ theme }) => theme.contact.sharbe_technology};
  font-size: 7rem;
  font-family: ${fonts.secondary}, sans-serif;
  font-weight: 700;
  white-space: nowrap;

  position: absolute;
  bottom: -26px;
  left: -24px;
`;
