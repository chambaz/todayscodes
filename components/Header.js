import styled from '@emotion/styled'

const Container = styled.header({
  borderBottom: 'solid 2px #777',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: 30
})

const LogoContainer = styled.h1({
  margin: 0
})

const Logo = styled.a({
  color: '#333',
  textDecoration: 'none'
})

const GitHubButton = styled.a({
  background: '#333',
  borderRadius: 5,
  color: '#fff',
  padding: '20px 30px',
  textDecoration: 'none'
})

function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo href="/">todays.codes</Logo>
      </LogoContainer>
      <GitHubButton href="#">Share your commit</GitHubButton>
    </Container>
  )
}

export default Header
