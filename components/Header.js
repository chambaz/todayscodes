import styled from '@emotion/styled'
import '@fortawesome/fontawesome-free/js/all'

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
  border: 'solid 2px #333',
  borderRadius: 5,
  color: '#fff',
  padding: '15px 20px',
  textDecoration: 'none',
  transition: '.3s',

  ':hover': {
    background: '#fff',
    color: '#333'
  }
})

function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo href="/">todays.codes</Logo>
      </LogoContainer>
      <GitHubButton href="#">
        <i class="fab fa-github fa-lg" style={{ marginRight: 15 }} />
        Share your commit
      </GitHubButton>
    </Container>
  )
}

export default Header
