import styled from '@emotion/styled'

const Container = styled.footer({
  padding: '20px 0',
  textAlign: 'center'
})

const DS = styled.a({
  marginLeft: 10,
  color: '#c3367c',
  textDecoration: 'none'
})

const DSLogo = styled.span({
  display: 'inline-block',
  position: 'relative',
  transform: 'translateY(-2px)'
})

function Footer() {
  return (
    <Container>
      Made with ❤️ at
      <DS
        href="https://www.digitalsurgeons.com"
        title="Digital Innovation Agency">
        <DSLogo>▞</DSLogo> Digital Surgeons
      </DS>
    </Container>
  )
}

export default Footer
