import styled from '@emotion/styled'
import Commit from './Commit'

const Container = styled.div({
  paddingTop: 30
})

function Feed() {
  return (
    <Container>
      <Commit />
      <Commit />
      <Commit />
    </Container>
  )
}

export default Feed
