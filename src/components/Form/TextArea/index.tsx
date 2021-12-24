import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { FieldError } from 'react-hook-form';

import { ErrorMessage } from '../ErrorMessage';

import { Container, Label, TextAreaElement } from './styles';

interface ITextAreaProps {
  name: string;
  label: string;
  error?: FieldError;
  placeholder: string;
}

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  ITextAreaProps
> = ({ name, label, error = null, placeholder }, ref) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    const textAreaElement: any = document.getElementsByName(name);

    if (textAreaElement[0].value) {
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
        name={name}
        id={name}
        ref={ref}
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

export const TextArea = forwardRef(TextAreaBase);
