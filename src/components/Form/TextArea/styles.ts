import styled, { css } from 'styled-components';

import { fonts } from '@/styles/theme/fonts';

interface ITextAreaElementProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;

  font-size: 0.875rem;
  font-family: ${fonts.primary}, sans-serif;
  color: ${({ theme }) => theme.contact.label};
`;

export const TextAreaElement = styled.textarea<ITextAreaElementProps>`
  padding: 1rem 1.125rem;
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.contact.input_border};
  outline: 0;
  color: ${({ theme }) => theme.contact.input_color};
  font-family: ${fonts.primary}, sans-serif;
  font-size: 0.875rem;
  margin-top: 0.375rem;
  background-color: ${({ theme }) => theme.contact.input};
  resize: none;
  min-height: 11.375rem;

  transition: border-color 0.2s;

  ${({ isFocused, isFilled, theme }) =>
    (isFocused || isFilled) &&
    css`
      border-color: ${theme.contact.shape_active};
    `}

  ${({ isErrored, theme }) =>
    isErrored &&
    css`
      border-color: ${theme.contact.input_error};
    `}

    &::placeholder {
    color: ${({ theme }) => theme.contact.placeholder};
  }

  &:hover {
    border-color: ${({ theme }) => theme.contact.shape_active};
  }

  &::-webkit-scrollbar {
    width: 20px;
    height: 100%;
  }

  &::-webkit-scrollbar-track {
    background-color: red;
    border-radius: 0.75rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.75rem;
    background-color: pink;
  }
`;
