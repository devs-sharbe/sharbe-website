import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import { RiGithubFill } from 'react-icons/ri';

import { Container, Logo, ContactContent } from './styles';

export function Header(): JSX.Element {
  const theme = useTheme();
  const { asPath } = useRouter();

  return (
    <Container>
      <Logo>
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="36.0153"
            height="36.0153"
            rx="7.68327"
            fill={theme.logo_background}
          />
          <path
            d="M31.6887 18.8481C32.157 18.3798 32.157 17.6203 31.6887 17.152L24.0561 9.51947C23.5878 9.05113 22.8285 9.05113 22.36 9.51947C21.8917 9.98793 21.8917 10.7472 22.36 11.2156L29.1445 18.0001L22.36 24.7845C21.8917 25.2529 21.8917 26.0122 22.36 26.4806C22.8285 26.949 23.5878 26.949 24.0561 26.4806L31.6887 18.8481ZM30.6008 19.1994H30.8406V16.8007H30.6008V19.1994Z"
            fill="#F0F0F0"
          />
          <path
            d="M26.5317 18.8481C27 18.3798 27 17.6203 26.5317 17.152L18.8992 9.51947C18.4308 9.05113 17.6715 9.05113 17.2031 9.51947C16.7347 9.98793 16.7347 10.7472 17.2031 11.2156L23.9876 18.0001L17.2031 24.7845C16.7347 25.2529 16.7347 26.0122 17.2031 26.4806C17.6715 26.949 18.4308 26.949 18.8992 26.4806L26.5317 18.8481ZM25.4438 19.1994H25.6836V16.8007H25.4438V19.1994Z"
            fill="#F0F0F0"
          />
          <path
            d="M4.76458 17.152C4.29625 17.6203 4.29625 18.3798 4.76458 18.8481L12.3971 26.4806C12.8655 26.949 13.6248 26.949 14.0932 26.4806C14.5616 26.0122 14.5616 25.2529 14.0932 24.7845L7.30873 18.0001L14.0932 11.2156C14.5616 10.7472 14.5616 9.98793 14.0932 9.51947C13.6248 9.05113 12.8655 9.05113 12.3971 9.51947L4.76458 17.152ZM5.8525 16.8007H5.61263V19.1994H5.8525V16.8007Z"
            fill="white"
          />
          <path
            d="M21.7343 18.8481C22.2027 18.3798 22.2027 17.6203 21.7343 17.152L14.1018 9.51947C13.6335 9.05113 12.8742 9.05113 12.4057 9.51947C11.9374 9.98793 11.9374 10.7472 12.4057 11.2156L19.1902 18.0001L12.4057 24.7845C11.9374 25.2529 11.9374 26.0122 12.4057 26.4806C12.8742 26.949 13.6335 26.949 14.1018 26.4806L21.7343 18.8481ZM20.6464 19.1994H20.8863V16.8007H20.6464V19.1994Z"
            fill="#F0F0F0"
          />
          <path
            d="M4.76458 17.152C4.29625 17.6203 4.29625 18.3798 4.76458 18.8481L12.3971 26.4806C12.8655 26.949 13.6248 26.949 14.0932 26.4806C14.5616 26.0122 14.5616 25.2529 14.0932 24.7845L7.30873 18.0001L14.0932 11.2156C14.5616 10.7472 14.5616 9.98793 14.0932 9.51947C13.6248 9.05113 12.8655 9.05113 12.3971 9.51947L4.76458 17.152ZM5.8525 16.8007H5.61263V19.1994H5.8525V16.8007Z"
            fill="#F0F0F0"
          />
        </svg>
        Sharbe
      </Logo>

      <ContactContent>
        {asPath !== '/contact' && (
          <nav>
            <a>Entrar em contato</a>
          </nav>
        )}

        <a
          href="https://github.com/viniciusmendite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiGithubFill size="24" color={theme.shape} />
        </a>
      </ContactContent>
    </Container>
  );
}