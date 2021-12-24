import { ThemeProvider } from 'styled-components';
import {
  RiMailSendFill,
  RiMailFill,
  RiWhatsappFill,
  RiInformationFill,
} from 'react-icons/ri';

import { Header } from '@/components/Header';

import { useTheme } from '@/hook/theme';

import GlobalStyle from '@/styles/GlobalStyle';
import { darkTheme, lightTheme } from '@/styles/theme/colors';

import {
  Container,
  ContactBox,
  ContactForm,
  ContactFormTitleContent,
  ContactInformation,
  ContactInformationList,
  ContactInformationListItem,
} from './styles';
import { Footer } from '@/components/Footer';

export default function Contact(): JSX.Element {
  const { themeSelected } = useTheme();

  return (
    <ThemeProvider theme={themeSelected === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />

      <Container>
        <section>
          <h1>Olá! Conte-nos sobre seu projeto</h1>
          <p>
            Conte-nos tudo sobre o seu projeto ou empreendimento, teremos o
            maior prazer em ajudar. Preencha o formulário abaixo ou envie-nos um
            e-mail.
          </p>
        </section>

        <ContactBox>
          <ContactForm>
            <ContactFormTitleContent>
              <h3>Envie-nos uma mensagem</h3>
              <RiMailSendFill size="30" />
            </ContactFormTitleContent>
          </ContactForm>

          <ContactInformation>
            <h3>Informações de contato</h3>

            <ContactInformationList>
              <ContactInformationListItem>
                <a href="mailto:contato@sharbe.com.br">
                  <RiMailFill size="24" />
                  contato@sharbe.com.br
                </a>
              </ContactInformationListItem>
              <ContactInformationListItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5511932976631"
                >
                  <RiWhatsappFill size="24" />
                  Whatsapp
                </a>
              </ContactInformationListItem>
              <ContactInformationListItem>
                <span>
                  <RiInformationFill size="24" />
                  Segunda à sexta, 09 às 17h
                </span>
              </ContactInformationListItem>
            </ContactInformationList>
          </ContactInformation>
        </ContactBox>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
