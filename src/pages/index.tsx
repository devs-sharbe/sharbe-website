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
            constru????o de sites, sistemas web, aplicativos e testes
            automatizados.
          </p>

          <Buttons isLight={themeSelected === 'light'}>
            <button type="button" onClick={handleScrollToTechnologiesSection}>
              Come??ar
            </button>

            {/* <a>Nossos Projetos</a> */}
          </Buttons>
        </HighlightSection>

        <TechnologiesSection name="technologies-section">
          <h2>
            Sharbe Tecnologia<span>.</span>
          </h2>
          {/* <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p> */}

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
                  <h3>Servidores de API com arquiteturas escal??veis</h3>
                  <p>
                    Constru????o de arquiteturas escal??veis, simples e completas
                    utilizando Node.js, um ambiente de tempo de execu????o
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
                  <h3>Intregra????es Back-end e arquitetura Jamstack</h3>
                  <p>
                    Constru????o, implanta????o e escalonamento de projetos
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
                    Desenvolvimento de aplica????es mobile modernas e reativas
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
                  <h3>Implanta????o de projetos em produ????o e CI/CD</h3>
                  <p>
                    Implanta????o de projetos nas principais plataformas como
                    Heroku, Digital Ocean, AWS, Vercel, Netlify, entre outras.
                    Al??m de automatiza????o desses processos e integra????o cont??nua
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
                  <h3>Testes automatizados aplicados ?? QA e TDD</h3>
                  <p>
                    Constru????o e desenvolvimento de testes automatizados para
                    softwares j?? em funcionamento ou em processo de
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
                Um projeto <span>n??o ?? feito</span> apenas de c??digo
              </h2>

              <p>
                O sucesso de qualquer projeto voltado ?? elabora????o de software
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
                Princ??pios da programa????o e arquiteturas de software v??o fazer
                nossas aplica????es serem extremamente escal??veis, assim como
                testes automatizados e a metodologia de Test Drive Development.
              </p>
            </MethodologyTopic>

            <MethodologyTopic>
              <h3>Clean Code</h3>
              <p>
                Um conjunto de boas pr??ticas na escrita de software que permite
                obter uma maior legibilidade e manutenabilidade do seu c??digo.
              </p>
            </MethodologyTopic>

            <MethodologyTopic>
              <h3>KISS</h3>
              <p>
                ?? uma filosofia que acredita na genialidade da simplicidade e o
                ???keep it simple??? tamb??m pode significar manter curto e simples,
                manter simples e direto, bem como manter inteligente e simples.
              </p>
            </MethodologyTopic>

            <MethodologyTopic>
              <h3>Extreme Programming</h3>
              <p>
                Uma metodologia focada no desenvolvimento de software que possui
                valores e princ??pios, onde s??o fundamentados por um conjunto de
                pr??ticas.
              </p>
            </MethodologyTopic>
          </MethodologiesTopics>
        </MethodologiesSection>

        <RepositorySection isLight={themeSelected === 'light'}>
          <RepositorySectionContent>
            <h2>Conhe??a esse e outros reposit??rios</h2>
            <RepositorySectionDescriptionContent>
              <p>
                Confira de perto o c??digo fonte e as tecnologias por tr??s deste
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
                e servi??os para constru????o de arquiteturas serverless como
                PlanetScale, Upstash e AmazonSES.
              </p>

              <RepositoryDivisor />

              <span>
                Certifique-se de ter o Git e o Node.js na vers??o 16 instalados
                em sua m??quina:
              </span>

              <CodeBlock>
                <CodeBlockTitleContent>
                  <span># Clone este reposit??rio usando https</span>

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
