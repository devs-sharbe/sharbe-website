import { ThemeProvider } from 'styled-components';
import {
  RiMailSendFill,
  RiMailFill,
  RiWhatsappFill,
  RiInformationFill,
  RiSendPlaneFill,
} from 'react-icons/ri';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useCallback } from 'react';
import { Header } from '@/components/Header';

import { useTheme } from '@/hook/theme';

import GlobalStyle from '@/styles/GlobalStyle';
import { darkTheme, lightTheme } from '@/styles/theme/colors';

import {
  Container,
  ContactBox,
  ContactForm,
  ContactFormTitleContent,
  ContactFormFields,
  ContactInformation,
  ContactInformationList,
  ContactInformationListItem,
  SharbeTechnology,
} from './styles';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/Form/Input';
import { TextArea } from '@/components/Form/TextArea';

interface IContactFormData {
  name: string;
  email: string;
  telefone: string;
  company: string;
}

const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Este campo é obrigatório')
    .min(3, 'Mínimo de 3 caracteres'),
  email: yup
    .string()
    .required('Este campo é obrigatório')
    .email('Informe um e-mail válido'),
  telephone: yup
    .string()
    .required('Este campo é obrigatório')
    .min(10, 'Mínimo de 10 dígitos')
    .max(11, 'Máximo de 11 dígitos'),
});

export default function Contact(): JSX.Element {
  const { themeSelected } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const handleGetInTouch: SubmitHandler<IContactFormData> = useCallback(
    values => {
      console.log(values);
    },
    [],
  );

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
          <ContactForm onSubmit={handleSubmit(handleGetInTouch)}>
            <ContactFormTitleContent>
              <h3>Envie-nos uma mensagem</h3>
              <RiMailSendFill size="30" />
            </ContactFormTitleContent>

            <ContactFormFields>
              <Input
                {...register('name')}
                name="name"
                label="Nome*"
                placeholder="Digite seu nome"
                error={errors.name}
              />
              <Input
                {...register('email')}
                name="email"
                label="E-mail*"
                placeholder="Digite seu e-mail"
                error={errors.email}
              />
            </ContactFormFields>

            <ContactFormFields>
              <Input
                {...register('telephone')}
                name="telephone"
                label="Telefone*"
                placeholder="Digite seu telefone"
                error={errors.telephone}
                type="number"
              />
              <Input
                {...register('company')}
                name="company"
                label="Empresa"
                placeholder="Digite o nome da sua empresa"
                error={errors.company}
              />
            </ContactFormFields>

            <ContactFormFields>
              <TextArea
                {...register('message')}
                name="message"
                label="Mensagem"
                placeholder="Conte-nos um pouco sobre o projeto"
              />
            </ContactFormFields>

            <button type="submit">
              Enviar mensagem
              <RiSendPlaneFill size="16" />
            </button>
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

            <SharbeTechnology>Sharbe Tecnologia</SharbeTechnology>
          </ContactInformation>
        </ContactBox>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
