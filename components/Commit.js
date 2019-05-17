import styled from '@emotion/styled'

const Container = styled.div({
  borderBottom: 'solid 2px #777',
  padding: '40px 0'
})

const Header = styled.header({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 10
})

const Author = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const Avatar = styled.img({
  borderRadius: '100%',
  marginRight: 15
})

const User = styled.a({
  color: '#333',
  fontWeight: 'bold',
  textDecoration: 'none'
})

const Repo = styled.a({
  display: 'block',
  color: '#333',
  fontWeight: 'bold',
  padding: '5px 0',
  textDecoration: 'none',
  textAlign: 'right'
})

const Hash = styled.a({
  display: 'block',
  color: '#333',
  padding: '5px 0',
  textDecoration: 'none',
  textAlign: 'right'
})

function Commit() {
  return (
    <Container>
      <Header>
        <Author>
          <Avatar src="https://i.pravatar.cc/50" />
          <User href="#">@chambaz</User>
        </Author>
        <div>
          <Repo href="#">chambaz/audiocrawl</Repo>
          <Hash href="#">3c400ad2ca099968f7bf369691d45be261230a3c</Hash>
        </div>
      </Header>
    </Container>
  )
}

export default Commit
