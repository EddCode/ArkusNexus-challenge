import Page, { ImageContainer, Login as Container, Text, Title, TitleWraper } from './login.styles'
import mindLogo from '@/app/assets/mind-logo.svg'
import Login from '@/widgets/Login'

const LoginPage = () => {
  return (
    <Page>
      <Container>
        <ImageContainer>
          <img src={mindLogo} alt="mind's logo"/>
        </ImageContainer>
        <TitleWraper>
          <Title>Welcome to Mind's support</Title>
          <Text>By Mind Group</Text>
        </TitleWraper>
        <Login />
      </Container>
    </Page>
  )
}

export default LoginPage
