import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiExternalLinkLine,
  RiFileCopyLine,
} from 'react-icons/ri';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from '@/hook/theme';

import GlobalStyle from '@/styles/GlobalStyle';
import { darkTheme, lightTheme } from '@/styles/theme/colors';

import { Header } from '@/components/Header';
import { TechnologiesBox } from '@/components/TechnologiesBox';
import { Footer } from '@/components/Footer';

import {
  Container,
  HighlightSection,
  Buttons,
  TechnologiesSection,
  Heading,
  Description,
  Technologies,
  TechnologiesList,
  TechnologiesListItem,
  TechnologiesDivisor,
  MethodologiesSection,
  MethodologiesBoxes,
  MethodologiesBoxLeft,
  MethodologiesBoxRight,
  MethodologiesDivisor,
  MethodologiesTopics,
  MethodologyTopic,
  RepositorySection,
  RepositorySectionContent,
  RepositorySectionDescriptionContent,
  RepositoryBox,
  RepositoryBoxTitleContent,
  RepositoryDivisor,
  CodeBlock,
  CodeBlockTitleContent,
  SuccessfullyCopied,
  CodeBlockCommandLine,
} from '@/styles/home';

type ITechnologiesMenu =
  | 'backEnd'
  | 'frontEnd'
  | 'mobile'
  | 'deploy'
  | 'automatedTests';

export default function Home(): JSX.Element {
  const { themeSelected } = useTheme();

  const [technologySelected, setTechnologySelected] =
    useState<ITechnologiesMenu>('backEnd');

  function handleSelectTechnology(tech: ITechnologiesMenu) {
    setTechnologySelected(tech);
  }

  return (
    <ThemeProvider theme={themeSelected === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />

      <Header />
      <Container>
        <HighlightSection>
          <AnimatePresence>
            <motion.h1
              initial={{ translateY: -50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              exit={{ opacity: 0.5 }}
            >
              Projetos de software que{' '}
              {themeSelected === 'light' ? <span>constroem</span> : 'constroem'}{' '}
              o futuro
            </motion.h1>
          </AnimatePresence>

          <motion.p
            initial={{ translateY: -50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Utilizando tecnologias modernas do ecossistema Javascript para a
            construção de sites, sistemas web, aplicativos e testes
            automatizados.
          </motion.p>

          <Buttons
            isLight={themeSelected === 'light'}
            initial={{ translateY: -50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <button type="button">Começar</button>

            <a>Nossos Projetos</a>
          </Buttons>
        </HighlightSection>

        <TechnologiesSection>
          <Heading>
            Sharbe Tecnologia<span>.</span>
          </Heading>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Description>

          <Technologies>
            <TechnologiesList>
              <TechnologiesListItem active={technologySelected === 'backEnd'}>
                <button
                  type="button"
                  onClick={() => handleSelectTechnology('backEnd')}
                >
                  Back-end
                </button>
              </TechnologiesListItem>
              <TechnologiesDivisor />
              <TechnologiesListItem active={technologySelected === 'frontEnd'}>
                <button
                  type="button"
                  onClick={() => handleSelectTechnology('frontEnd')}
                >
                  Front-end
                </button>
              </TechnologiesListItem>
              <TechnologiesDivisor />
              <TechnologiesListItem active={technologySelected === 'mobile'}>
                <button
                  type="button"
                  onClick={() => handleSelectTechnology('mobile')}
                >
                  Mobile
                </button>
              </TechnologiesListItem>
              <TechnologiesDivisor />
              <TechnologiesListItem active={technologySelected === 'deploy'}>
                <button
                  type="button"
                  onClick={() => handleSelectTechnology('deploy')}
                >
                  Deploy
                </button>
              </TechnologiesListItem>
              <TechnologiesDivisor />
              <TechnologiesListItem
                active={technologySelected === 'automatedTests'}
              >
                <button
                  type="button"
                  onClick={() => handleSelectTechnology('automatedTests')}
                >
                  Automated Tests
                </button>
              </TechnologiesListItem>
            </TechnologiesList>

            <TechnologiesBox technologySelected={technologySelected} />
          </Technologies>
        </TechnologiesSection>

        <MethodologiesSection>
          <MethodologiesBoxes>
            <MethodologiesBoxLeft>
              <h2>
                Um projeto <span>não é feito</span> apenas de código
              </h2>

              <div>
                <button type="button">Entrar em contato</button>
                <a>
                  Veja nossos projetos <RiArrowRightLine size="24" />
                </a>
              </div>
            </MethodologiesBoxLeft>

            <MethodologiesBoxRight>
              <p>
                O sucesso de qualquer projeto voltado à elaboração de software
                depende diretamente da escolha da metodologia mais adequada.
              </p>
            </MethodologiesBoxRight>
          </MethodologiesBoxes>

          <MethodologiesDivisor />

          <MethodologiesTopics>
            <MethodologyTopic>
              <h3>TDD e DDD</h3>
              <p>
                Princípios da programação e arquiteturas de software vão fazer
                nossas aplicações serem extremamente escaláveis, assim como
                testes automatizados e a metodologia de Test Drive Development.
              </p>
            </MethodologyTopic>

            <MethodologyTopic>
              <h3>Clean Code</h3>
              <p>
                Um conjunto de boas práticas na escrita de software que permite
                obter uma maior legibilidade e manutenabilidade do seu código.
              </p>
            </MethodologyTopic>

            <MethodologyTopic>
              <h3>KISS</h3>
              <p>
                É uma filosofia que acredita na genialidade da simplicidade e o
                “keep it simple” também pode significar manter curto e simples,
                manter simples e direto, bem como manter inteligente e simples.
              </p>
            </MethodologyTopic>

            <MethodologyTopic>
              <h3>Extreme Programming</h3>
              <p>
                Uma metodologia focada no desenvolvimento de software que possui
                valores e princípios, onde são fundamentados por um conjunto de
                práticas.
              </p>
            </MethodologyTopic>
          </MethodologiesTopics>
        </MethodologiesSection>

        <RepositorySection isLight={themeSelected === 'light'}>
          <RepositorySectionContent>
            <h2>Conheça esse e outros repositórios</h2>
            <RepositorySectionDescriptionContent>
              <p>
                Confira de perto o código fonte e as tecnologias por trás deste
                site.
              </p>

              <a>
                Ver mais <RiArrowRightUpLine size="24" />
              </a>
            </RepositorySectionDescriptionContent>

            <RepositoryBox isLight={themeSelected === 'light'}>
              <RepositoryBoxTitleContent>
                <h3>Sharbe Website Jamstack</h3>

                <a>
                  <RiExternalLinkLine size="24" />
                </a>
              </RepositoryBoxTitleContent>
              <p>
                Este site foi desenvolvido utilzando Next.js junto a ferramentas
                e serviços para construção de arquiteturas serverless como
                PlanetScale, Upstash e AmazonSES.
              </p>

              <RepositoryDivisor />

              <span>
                Certifique-se de ter o Git e o Node.js na versão 14 instalados
                em sua máquina:
              </span>

              <CodeBlock>
                <CodeBlockTitleContent>
                  <span># Clone este repositório usando https</span>

                  <CopyToClipboard
                    text="https://github.com/devs-sharbe/sharbe-website.git"
                    onCopy={() => console.log('copiou')}
                  >
                    <button type="button">
                      <RiFileCopyLine size="16" />
                    </button>
                  </CopyToClipboard>

                  <SuccessfullyCopied>Copiado!</SuccessfullyCopied>
                </CodeBlockTitleContent>

                <CodeBlockCommandLine>
                  <span>
                    $ git clone
                    https://github.com/devs-sharbe/sharbe-website.git
                  </span>
                </CodeBlockCommandLine>
              </CodeBlock>
            </RepositoryBox>
          </RepositorySectionContent>
        </RepositorySection>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
