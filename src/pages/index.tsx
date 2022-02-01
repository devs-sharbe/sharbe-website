import { useState } from 'react';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiExternalLinkLine,
  RiCheckLine,
  RiFileCopyLine,
} from 'react-icons/ri';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { scroller } from 'react-scroll';

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
  Technologies,
  TechnologiesList,
  TechnologiesListItem,
  TechnologiesDescription,
  TechnologiesDivisor,
  MethodologiesSection,
  MethodologiesBoxes,
  MethodologiesBoxTop,
  MethodologiesBoxBottom,
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

  const [githubLinkHasCopied, setGithubLinkHasCopied] = useState(false);

  function handleSelectTechnology(tech: ITechnologiesMenu) {
    setTechnologySelected(tech);
  }

  function handleCopyGithubLink() {
    setGithubLinkHasCopied(true);

    setTimeout(() => {
      setGithubLinkHasCopied(false);
    }, 3000);
  }

  function handleScrollToTechnologiesSection() {
    scroller.scrollTo('technologies-section', { duration: 700 });
  }

  return (
    <ThemeProvider theme={themeSelected === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />

      <Header />
      <Container>
        <HighlightSection id="highlight-section">
          <h1>
            Projetos de software que{' '}
            {themeSelected === 'light' ? <span>constroem</span> : 'constroem'} o
            futuro
          </h1>

          <p>
            Utilizando tecnologias modernas do ecossistema Javascript para a
            construção de sites, sistemas web, aplicativos e testes
            automatizados.
          </p>

          <Buttons isLight={themeSelected === 'light'}>
            <button type="button" onClick={handleScrollToTechnologiesSection}>
              Começar
            </button>

            {/* <a>Nossos Projetos</a> */}
          </Buttons>
        </HighlightSection>

        <TechnologiesSection name="technologies-section">
          <h2>
            Sharbe Tecnologia<span>.</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <Technologies>
            <TechnologiesList>
              <TechnologiesListItem active={technologySelected === 'backEnd'}>
                <button
                  type="button"
                  onClick={() => handleSelectTechnology('backEnd')}
                >
                  Back-end
                </button>

                <TechnologiesDescription>
                  <h3>Servidores de API com arquiteturas escaláveis</h3>
                  <p>
                    Construção de arquiteturas escaláveis, simples e completas
                    utilizando Node.js, um ambiente de tempo de execução
                    JavaScript no lado do servidor. Acompanhado de frameworks do
                    mercado como Express.js e Adonis.js.
                  </p>
                </TechnologiesDescription>
              </TechnologiesListItem>
              <TechnologiesDivisor />
              <TechnologiesListItem active={technologySelected === 'frontEnd'}>
                <button
                  type="button"
                  onClick={() => handleSelectTechnology('frontEnd')}
                >
                  Front-end
                </button>

                <TechnologiesDescription>
                  <h3>Intregrações Back-end e arquitetura Jamstack</h3>
                  <p>
                    Construção, implantação e escalonamento de projetos
                    Front-End web modernos, utilizando grandes bibliotecas do
                    mercado como React, ChakraUI, MUI junto a frameworks como
                    Next.js.
                  </p>
                </TechnologiesDescription>
              </TechnologiesListItem>
              <TechnologiesDivisor />
              <TechnologiesListItem active={technologySelected === 'mobile'}>
                <button
                  type="button"
                  onClick={() => handleSelectTechnology('mobile')}
                >
                  Mobile
                </button>

                <TechnologiesDescription>
                  <h3>Aplicativos modernos e reativos multiplataforma</h3>
                  <p>
                    Desenvolvimento de aplicações mobile modernas e reativas
                    tanto para iOS quanto para Android de forma nativa
                    utilizando React Native, uma biblioteca React para
                    desenvolvimento nativo.
                  </p>
                </TechnologiesDescription>
              </TechnologiesListItem>
              <TechnologiesDivisor />
              <TechnologiesListItem active={technologySelected === 'deploy'}>
                <button
                  type="button"
                  onClick={() => handleSelectTechnology('deploy')}
                >
                  Deploy
                </button>

                <TechnologiesDescription>
                  <h3>Implantação de projetos em produção e CI/CD</h3>
                  <p>
                    Implantação de projetos nas principais plataformas como
                    Heroku, Digital Ocean, AWS, Vercel, Netlify, entre outras.
                    Além de automatização desses processos e integração contínua
                    utilizando Github Actions.
                  </p>
                </TechnologiesDescription>
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

                <TechnologiesDescription>
                  <h3>Testes automatizados aplicados à QA e TDD</h3>
                  <p>
                    Construção e desenvolvimento de testes automatizados para
                    softwares já em funcionamento ou em processo de
                    desenvolvimento utilizando ferramentas como Jest, Japa e
                    Cypress com Cucumber (BDD).
                  </p>
                </TechnologiesDescription>
              </TechnologiesListItem>
            </TechnologiesList>

            <TechnologiesBox technologySelected={technologySelected} />
          </Technologies>
        </TechnologiesSection>

        <MethodologiesSection>
          <MethodologiesBoxes>
            <MethodologiesBoxTop>
              <h2>
                Um projeto <span>não é feito</span> apenas de código
              </h2>

              <p>
                O sucesso de qualquer projeto voltado à elaboração de software
                depende diretamente da escolha da metodologia mais adequada.
              </p>
            </MethodologiesBoxTop>

            <MethodologiesBoxBottom>
              <Link href="/contact">
                <a>Entrar em contato</a>
              </Link>
              {/* <a>
                Veja nossos projetos <RiArrowRightLine size="24" />
              </a> */}
            </MethodologiesBoxBottom>
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
                Certifique-se de ter o Git e o Node.js na versão 16 instalados
                em sua máquina:
              </span>

              <CodeBlock>
                <CodeBlockTitleContent>
                  <span># Clone este repositório usando https</span>

                  <CopyToClipboard
                    text="git clone https://github.com/devs-sharbe/sharbe-website.git"
                    onCopy={handleCopyGithubLink}
                  >
                    <button type="button" disabled={githubLinkHasCopied}>
                      {githubLinkHasCopied ? (
                        <RiCheckLine size="16" />
                      ) : (
                        <RiFileCopyLine size="16" />
                      )}
                    </button>
                  </CopyToClipboard>
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
