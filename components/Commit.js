import { useState } from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  borderTop: 'solid 2px #ddd',
  cursor: 'pointer',
  padding: 40,
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

const FullMessage = styled.div({
  padding: '40px 0',
  lineHeight: 1.8
})

function Commit() {
  const [active, setActive] = useState(false)

  return (
    <Container
      onClick={e => {
        setActive(!active)
      }}>
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
        <FullMessage style={{ display: active ? 'block' : 'none' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae pharetra purus, ut lacinia arcu. Mauris a imperdiet erat. Cras
            ullamcorper eget felis sed bibendum. Donec ultricies lorem ac libero
            condimentum, sit amet fringilla tellus lacinia. Morbi aliquam
            sagittis erat at vestibulum.
          </p>
          <p>
            Ut vitae dictum risus. Vestibulum ornare urna in pharetra vulputate.
            Nunc viverra venenatis purus. Mauris et porttitor magna, vel
            malesuada nulla. Cras et efficitur diam. Nulla eget lectus sed metus
            fringilla condimentum. Donec eu efficitur metus. Fusce est enim,
            tempor in sem ut, auctor sollicitudin metus. Morbi nec mauris in
            tortor scelerisque venenatis. Sed non justo imperdiet, posuere diam
            sit amet, auctor augue. Aenean consequat quam ac diam egestas, id
            lacinia urna imperdiet.
          </p>
        </FullMessage>
      </Body>
    </Container>
  )
}

export default Commit
