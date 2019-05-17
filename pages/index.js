import styled from '@emotion/styled'
import Header from '../components/Header'

const App = styled.div({
  boxSizing: 'border-box',
  margin: 0,
  padding: 20,
  fontFamily: 'Menlo',
  margin: '0 auto',
  maxWidth: 1400,
  width: '100%'
})

function Home() {
  return (
    <App>
      <Header />
    </App>
  )
}

export default Home
