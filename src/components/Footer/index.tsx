import { ChangeEvent } from 'react';
import {
  RiGithubFill,
  RiLinkedinFill,
  RiSunLine,
  RiMoonLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from 'react-icons/ri';
import { animateScroll as scroll } from 'react-scroll';

import { useTheme } from '@/hook/theme';

import {
  Container,
  SocialNetworksAndPolicies,
  SocialNetworks,
  Policies,
  Divisor,
  BusinessAndTheme,
  Business,
  Theme,
  SelectContent,
  SelectIconLeft,
  SelectIconRight,
  UpButton,
} from './styles';

export function Footer(): JSX.Element {
  const { handleChangeTheme, themeSelected } = useTheme();

  function handleSelectTheme(event: ChangeEvent<HTMLSelectElement>) {
    const theme = event.target.value as 'light' | 'dark';

    handleChangeTheme(theme);
  }

  function handleScrollToTop() {
    scroll.scrollToTop({ duration: 0 });
  }

  return (
    <Container>
      <SocialNetworksAndPolicies>
        <SocialNetworks>
          <RiGithubFill size="30" />
          <RiLinkedinFill size="30" />
        </SocialNetworks>

        <Policies>
          <a>Política de privacidade</a>
          <a>Termos de uso</a>
        </Policies>
      </SocialNetworksAndPolicies>

      <Divisor />

      <BusinessAndTheme>
        <Business>
          <span>Sharbe Tecnologia.</span>
          <p>
            Copyright &copy; {new Date().getFullYear()} Sharbe Tecnologia LTDA.
            Todos os direitos reservados.{' '}
          </p>
        </Business>

        <Theme>
          {/* <label htmlFor="themeSelect"> */}
          <SelectContent>
            <SelectIconLeft>
              {themeSelected === 'light' ? (
                <RiSunLine size="24" />
              ) : (
                <RiMoonLine size="24" />
              )}
            </SelectIconLeft>
            <select
              id="themeSelect"
              name="themeSelect"
              defaultValue={themeSelected}
              onChange={handleSelectTheme}
            >
              <option value="light">Claro</option>
              <option value="dark">Escuro</option>
            </select>
            <SelectIconRight>
              <RiArrowDownSLine size="24" />
            </SelectIconRight>
          </SelectContent>
          {/* </label> */}
          <UpButton type="button" onClick={handleScrollToTop}>
            <RiArrowUpSLine size="24" />
          </UpButton>
        </Theme>
      </BusinessAndTheme>
    </Container>
  );
}
