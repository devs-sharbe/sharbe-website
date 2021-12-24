import styled from 'styled-components';
import { fonts } from '@/styles/theme/fonts';

export const Container = styled.span`
  color: ${({ theme }) => theme.contact.input_error};
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  font-family: ${fonts.primary}, sans-serif;

  > svg {
    margin-right: 0.375rem;
  }
`;
