import {
  useState,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  ForwardRefRenderFunction,
  forwardRef,
} from 'react';
import { FieldError } from 'react-hook-form';

import { ErrorMessage } from '../ErrorMessage';

import { Container, Label, InputElement } from './styles';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: FieldError;
  type?: HTMLInputTypeAttribute;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, label, error = null, type = 'text', ...rest },
  ref,
) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    const inputElement = document.getElementsByName(
      name,
    )[0] as HTMLInputElement;

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
      <InputElement
        {...rest}
        name={name}
        id={name}
        ref={ref}
        type={type}
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

export const Input = forwardRef(InputBase);
