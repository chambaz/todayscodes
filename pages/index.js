import styled from '@emotion/styled'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Footer from '../components/Footer'

const App = styled.div({
  boxSizing: 'border-box',
  margin: 0,
  padding: 20,
  fontFamily: 'Menlo',
  margin: '0 auto',
  maxWidth: 1200,
  width: '100%'
})

function Home() {
  return (
    <App>
      <Header />
      <Feed />
      <Footer />
    </App>
  )
}

export default Home
