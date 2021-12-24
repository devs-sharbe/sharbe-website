import { RiErrorWarningFill } from 'react-icons/ri';

import { Container } from './styles';

interface IErrorMessage {
  message: string | undefined;
}

export function ErrorMessage({ message }: IErrorMessage): JSX.Element {
  return (
    <Container role="alert">
      <RiErrorWarningFill size="16" />
      {message}
    </Container>
  );
}
