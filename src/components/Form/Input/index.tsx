import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { FieldError } from 'react-hook-form';

import { ErrorMessage } from '../ErrorMessage';

import { Container, Label, InputElement } from './styles';

interface IInputProps {
  name: string;
  label: string;
  error?: FieldError;
  type?: string;
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, label, error = null, type = 'text', placeholder },
  ref,
) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    const inputElement: any = document.getElementsByName(name);

    if (inputElement[0].value) {
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
        name={name}
        id={name}
        ref={ref}
        type={type}
        placeholder={placeholder}
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
