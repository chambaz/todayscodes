import styled from '@emotion/styled'

const Container = styled.div({
  borderTop: 'solid 2px #ddd',
  cursor: 'pointer',
  padding: '40px 20px',
  transition: '.3s',

  ':hover': {
    background: '#fafafa'
  }
})

const Header = styled.header({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 0'
})

const Author = styled.a({
  display: 'flex',
  alignItems: 'center',
  color: '#333',
  fontWeight: 'bold',
  textDecoration: 'none'
})

const Avatar = styled.img({
  borderRadius: '100%',
  marginRight: 15
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

const Body = styled.div({
  padding: '30px 0 20px'
})

const Message = styled.p({
  fontSize: 22,
  margin: 0
})

function Commit() {
  return (
    <Container>
      <Header>
        <Author href="#">
          <Avatar src="https://i.pravatar.cc/50" />
          @chambaz
        </Author>
        <div>
          <Repo href="#">chambaz/audiocrawl</Repo>
          <Hash href="#">3c400ad2ca099968f7bf369691d45be261230a3c</Hash>
        </div>
      </Header>
      <Body>
        <Message>This is my awesome commit from today! 🤘</Message>
      </Body>
    </Container>
  )
}

export default Commit
