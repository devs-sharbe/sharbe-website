import { Container, TechnologiesIcons } from './styles';

import { Backend } from './Icons/backend';
import { Frontend } from './Icons/frontend';
import { Mobile } from './Icons/mobile';
import { Deploy } from './Icons/deploy';
import { AutomatedTests } from './Icons/automatedTests';

interface ITechnologiesBoxProps {
  technologySelected:
    | 'backEnd'
    | 'frontEnd'
    | 'mobile'
    | 'deploy'
    | 'automatedTests';
}

export function TechnologiesBox({
  technologySelected,
}: ITechnologiesBoxProps): JSX.Element {
  const data = {
    backEnd: {
      title: 'Servidores de API com arquiteturas escaláveis',
      description:
        'Construção de arquiteturas escaláveis, simples e completas utilizando Node.js, um ambiente de tempo de execução JavaScript no lado do servidor. Acompanhado de frameworks do mercado como Express.js e Adonis.js.',
      svg: <Backend />,
    },
    frontEnd: {
      title: 'Intregrações Back-end e arquitetura Jamstack',
      description:
        'Construção, implantação e escalonamento de projetos Front-End web modernos, utilizando grandes bibliotecas do mercado como React, ChakraUI, MUI junto a frameworks como Next.js.',
      svg: <Frontend />,
    },
    mobile: {
      title: 'Aplicativos modernos e reativos multiplataforma',
      description:
        'Desenvolvimento de aplicações mobile modernas e reativas tanto para iOS quanto para Android de forma nativa utilizando React Native, uma biblioteca React para desenvolvimento nativo.',
      svg: <Mobile />,
    },
    deploy: {
      title: 'Implantação de projetos em produção e CI/CD',
      description:
        'Implantação de projetos nas principais plataformas como Heroku, Digital Ocean, AWS, Vercel, Netlify, entre outras. Além de automatização desses processos e integração contínua utilizando Github Actions.',
      svg: <Deploy />,
    },
    automatedTests: {
      title: 'Testes automatizados aplicados à QA e TDD',
      description:
        'Construção e desenvolvimento de testes automatizados para softwares já em funcionamento ou em processo de desenvolvimento utilizando ferramentas como Jest, Japa e Cypress com Cucumber (BDD).',
      svg: <AutomatedTests />,
    },
  };

  return (
    <Container>
      <h3>{data[technologySelected].title}</h3>
      <p>{data[technologySelected].description}</p>

      <TechnologiesIcons>{data[technologySelected].svg}</TechnologiesIcons>
    </Container>
  );
}
