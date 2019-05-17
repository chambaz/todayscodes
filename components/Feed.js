import styled from '@emotion/styled'
import Commit from './Commit'

const Container = styled.div({
  paddingTop: 30
})

const LoadMore = styled.button({
  background: '#c3367c',
  border: 'solid 2px #c3367c',
  borderRadius: 5,
  color: '#fff',
  cursor: 'pointer',
  display: 'block',
  fontFamily: 'Menlo',
  fontSize: '16px',
  margin: '40px auto',
  padding: '15px 20px',
  textDecoration: 'none',
  transition: '.3s',

  ':hover': {
    background: '#fff',
    color: '#c3367c'
  }
})

function Feed() {
  return (
    <Container>
      <Commit />
      <Commit />
      <Commit />

      <LoadMore>
        <i class="fas fa-plus" style={{ marginRight: 15 }} />
        Checkout yesterday's commits
      </LoadMore>
    </Container>
  )
}

export default Feed
