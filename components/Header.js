import styled from '@emotion/styled'
import '@fortawesome/fontawesome-free/js/all'

const Container = styled.header({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '30px 0'
})

const LogoContainer = styled.h1({
  margin: 0
})

const Logo = styled.a({
  color: '#333',
  textDecoration: 'none'
})

const GitHubButton = styled.button({
  background: '#333',
  border: 'solid 2px #333',
  borderRadius: 5,
  color: '#fff',
  fontFamily: 'Menlo',
  fontSize: '16px',
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
        <Logo href="/">
          <span style={{ color: '#c3367c' }}>todays</span>.codes
        </Logo>
      </LogoContainer>
      <GitHubButton href="#">
        <i class="fab fa-github fa-lg" style={{ marginRight: 15 }} />
        Share your commit
      </GitHubButton>
    </Container>
  )
}

export default Header
