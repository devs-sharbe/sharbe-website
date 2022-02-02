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

    @media (max-width: 992px) {
      h1 {
        font-size: 3rem;
        max-width: 500px;
      }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
        max-width: 460px;
        padding: 0 1.5rem;
      }

      p {
        padding: 0 1.5rem;
      }
    }
  }
`;

export const ContactBox = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: -7.25rem auto 0;

  display: flex;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 1200px) {
    max-width: calc(100vw - 1.5rem);
  }
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
      opacity: 0.9;
      filter: brightness(0.7);
    }
  }

  @media (max-width: 1092px) {
    width: 660px;
  }

  @media (max-width: 1057px) {
    width: 600px;
  }

  @media (max-width: 992px) {
    width: 560px;
  }

  @media (max-width: 913px) {
    width: 480px;
  }

  @media (max-width: 854px) {
    width: 440px;
  }

  @media (max-width: 801px) {
    width: 420px;
  }

  @media (max-width: 782px) {
    width: 390px;
  }

  @media (max-width: 755px) {
    width: 380px;
  }

  @media (max-width: 740px) {
    width: 100%;
    border-radius: 0.75rem;
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

  @media (max-width: 913px) {
    h3 {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 782px) {
    align-items: center;
  }

  @media (max-width: 740px) {
    align-items: unset;
  }

  @media (max-width: 432px) {
    align-items: center;
  }
`;

export const ContactFormFields = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 913px) {
    flex-direction: column;
    margin-top: unset;

    label {
      margin-top: 1.5rem;
    }

    > div {
      width: 100%;
    }
  }
`;

export const Divisor = styled.div`
  display: none;
  width: 100%;
  height: 1px;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.divisor};

  @media (max-width: 740px) {
    display: block;
  }
`;

export const GetInTouchWhatsapp = styled.div`
  display: none;
  justify-content: center;

  a {
    display: flex;
    align-items: center;

    font-size: 1rem;
    font-family: ${fonts.primary}, sans-serif;
    color: ${({ theme }) => theme.contact.get_in_touch_whatsapp};

    > svg {
      margin-right: 0.75rem;
    }
  }

  @media (max-width: 740px) {
    display: flex;
  }
`;

export const ContactInformation = styled.div`
  position: relative;
  overflow: hidden;

  flex: 1;
  background-color: ${({ theme }) => theme.contact.blue};
  padding: 3rem 2rem;
  border-radius: 0 0.75rem 0.75rem 0;

  h3 {
    font-size: 1.5rem;
    font-family: ${fonts.secondary}, sans-serif;
    color: ${({ theme }) => theme.contact.heading};
  }

  @media (max-width: 740px) {
    display: none;
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
