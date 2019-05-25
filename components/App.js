import styled from '@emotion/styled'

const Container = styled.div({
  boxSizing: 'border-box',
  margin: 0,
  padding: 20,
  fontFamily: 'Menlo',
  margin: '0 auto',
  maxWidth: 1200,
  width: '100%'
})

function App(props) {
  return <Container>{props.children}</Container>
}

export default App
