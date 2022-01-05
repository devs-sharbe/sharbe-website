import styled, { css } from 'styled-components';

import { fonts } from './theme/fonts';

interface ITheme {
  isLight: boolean;
}

interface ITechnologiesListItem {
  active: boolean;
}

export const Container = styled.main``;

export const HighlightSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/images/background.svg') no-repeat bottom;
  background-size: contain;

  h1 {
    font-size: 4.5rem;
    color: ${({ theme }) => theme.title};
    font-family: ${fonts.secondary};
    font-weight: 700;
    text-align: center;

    span {
      color: ${({ theme }) => theme.title_highlight};
    }
  }

  p {
    font-size: 1.5rem;
    font-family: ${fonts.primary};
    color: ${({ theme }) => theme.shape};
    line-height: 2.125rem;
    text-align: center;

    max-width: 847px;
    margin-top: 2rem;
  }
`;

export const Buttons = styled.div<ITheme>`
  display: flex;
  margin-top: 4rem;

  button {
    height: 3.375rem;
    width: 10.8125rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.button_background_primary};

    font-size: 1rem;
    font-family: ${fonts.tertiary};
    font-weight: 500;
    color: ${({ theme }) => theme.button_color_primary};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    height: 3.375rem;
    min-width: 10.8125rem;
    padding: 0 1rem;
    border: 1px solid ${({ theme }) => theme.button_stroke};
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.button_background_secondary};

    font-size: 1rem;
    font-family: ${fonts.tertiary};
    font-weight: 500;
    color: ${({ theme }) => theme.button_color_secondary};

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    ${({ isLight }) =>
      isLight &&
      css`
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
      `}
  }
`;

export const TechnologiesSection = styled.section`
  max-width: 1120px;
  margin: 17.5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 3.5rem;
  font-family: ${fonts.secondary};
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  text-align: center;

  span {
    color: ${({ theme }) => theme.title_highlight};
  }
`;

export const Description = styled.p`
  font-size: 1.25rem;
  font-family: ${fonts.primary};
  color: ${({ theme }) => theme.shape};
  line-height: 1.75rem;
  text-align: center;

  margin-top: 2rem;
  max-width: 818px;
`;

export const Technologies = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.75rem;
`;

export const TechnologiesList = styled.ul`
  list-style: none;
`;

export const TechnologiesListItem = styled.li<ITechnologiesListItem>`
  margin-right: 2.625rem;

  button {
    padding: 0.6875rem 1rem;
    border-radius: 0.5rem;
    background-color: ${({ active, theme }) =>
      active
        ? theme.menu_tech_button_background
        : theme.menu_tech_button_background_disabled};

    font-size: 1.5rem;
    font-family: ${fonts.secondary};
    font-weight: 700;
    color: ${({ active, theme }) =>
      active
        ? theme.menu_tech_button_color
        : theme.menu_tech_button_color_disabled};

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TechnologiesDivisor = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.divisor};
  margin: 2.125rem 0;
`;

export const MethodologiesSection = styled.section`
  max-width: 1120px;
  margin: 17.5rem auto 0;
`;

export const MethodologiesBoxes = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const MethodologiesBoxLeft = styled.div`
  h2 {
    font-size: 3.5rem;
    font-family: ${fonts.secondary};
    font-weight: 700;
    color: ${({ theme }) => theme.title};

    max-width: 603px;

    span {
      color: ${({ theme }) => theme.title_highlight};
    }
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 3rem;

    button {
      height: 3.375rem;
      padding: 0 1.5rem;
      border-radius: 0.75rem;
      background-color: ${({ theme }) => theme.button_background_primary};

      font-size: 1rem;
      font-family: ${fonts.tertiary};
      font-weight: 500;
      color: ${({ theme }) => theme.button_color_primary};

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    a {
      display: flex;
      align-items: center;
      margin-left: 2.875rem;

      font-size: 1rem;
      font-family: ${fonts.tertiary};
      color: ${({ theme }) => theme.shape};

      transition: filter 0.2s;

      > svg {
        margin-left: 0.75rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const MethodologiesBoxRight = styled.div`
  p {
    font-size: 1.0625rem;
    font-family: ${fonts.primary};
    color: ${({ theme }) => theme.shape};
    text-align: justify;
    line-height: 1.75rem;

    max-width: 400px;
    margin-top: 0.3rem;
  }
`;

export const MethodologiesDivisor = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.divisor};

  margin: 5rem 0 5rem;
`;

export const MethodologiesTopics = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const MethodologyTopic = styled.div`
  max-width: 246px;

  h3 {
    font-size: 1.125rem;
    font-family: ${fonts.secondary};
    font-weight: 700;
    color: ${({ theme }) => theme.title};
  }

  p {
    font-size: 0.9375rem;
    font-family: ${fonts.primary};
    color: ${({ theme }) => theme.shape};
    text-align: justify;
    line-height: 1.5rem;

    margin-top: 1rem;
  }
`;

export const RepositorySection = styled.section<ITheme>`
  margin-top: 17.5rem;

  ${({ isLight }) =>
    isLight
      ? css`
          background: url('/images/globe_white_background.png') no-repeat right;
        `
      : css`
          background: url('/images/globe_blue_background.png') no-repeat right;
        `}

  background-size: contain;
`;

export const RepositorySectionContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  h2 {
    font-size: 3.5rem;
    font-family: ${fonts.secondary};
    font-weight: 700;
    color: ${({ theme }) => theme.title};

    max-width: 632px;
  }
`;

export const RepositorySectionDescriptionContent = styled.div`
  margin-top: 1.5rem;
  max-width: 632px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  p {
    font-size: 1.25rem;
    font-family: ${fonts.primary};
    color: ${({ theme }) => theme.shape};
    line-height: 1.75rem;

    max-width: 466px;
  }

  a {
    display: flex;
    align-items: center;

    font-size: 0.875rem;
    font-family: ${fonts.primary};
    color: ${({ theme }) => theme.external_link};

    > svg {
      margin-left: 0.25rem;
    }
  }
`;

export const RepositoryBox = styled.div<ITheme>`
  padding: 2rem;
  background-color: ${({ theme }) => theme.box_repository_background};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
  border-radius: 0.75rem;

  ${({ isLight }) =>
    isLight &&
    css`
      border: 1px solid ${({ theme }) => theme.button_stroke};
    `}

  width: 100%;
  max-width: 632px;
  margin-top: 3.5rem;

  p {
    font-size: 1rem;
    font-family: ${fonts.primary};
    color: ${({ theme }) => theme.box_repository_description};
    line-height: 1.375rem;

    margin-top: 1.25rem;
    max-width: 518px;
  }

  span {
    font-size: 1rem;
    font-family: ${fonts.primary};
    font-weight: 500;
    color: ${({ theme }) => theme.title};
    line-height: 1.375rem;

    display: block;
    max-width: 518px;
  }
`;

export const RepositoryBoxTitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.5rem;
    font-family: ${fonts.secondary};
    color: ${({ theme }) => theme.title};
  }

  a {
    font-size: 0;
    color: ${({ theme }) => theme.external_link};
  }
`;

export const RepositoryDivisor = styled.div`
  height: 1px;
  width: 100%;
  margin: 1.5rem 0;
  background-color: ${({ theme }) => theme.box_repository_divisor};
`;

export const CodeBlock = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) =>
    theme.box_repository_code_block_background};
`;

export const CodeBlockTitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  span {
    font-size: 0.875rem;
    font-family: ${fonts.code}, sans-serif;
    color: ${({ theme }) => theme.box_repository_code_block_title};
  }

  button {
    font-size: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.box_repository_code_block_title};
  }
`;

export const CodeBlockCommandLine = styled.div`
  margin-top: 0.25rem;

  span {
    font-size: 0.875rem;
    font-family: ${fonts.code}, sans-serif;
    color: ${({ theme }) => theme.box_repository_code_block_text};
  }
`;
