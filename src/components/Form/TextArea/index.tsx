import {
  useState,
  HTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
} from 'react';
import { FieldError } from 'react-hook-form';

import { ErrorMessage } from '../ErrorMessage';

import { Container, Label, TextAreaElement } from './styles';

interface ITextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  error?: FieldError;
}

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  ITextAreaProps
> = ({ name, label, error = null, ...rest }, ref) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    const inputElement = document.getElementsByName(
      name,
    )[0] as HTMLTextAreaElement;

    if (inputElement.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }

    setIsFocused(false);
  }

  return (
    <Container>
      <Label>{label}</Label>
      <TextAreaElement
        {...rest}
        name={name}
        id={name}
        ref={ref}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        isFilled={isFilled}
        isFocused={isFocused}
        isErrored={!!error}
      />
      {error && <ErrorMessage message={error.message} />}
    </Container>
  );
};

export const TextArea = forwardRef(TextAreaBase);
