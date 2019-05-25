import { useState } from 'react'
import styled from '@emotion/styled'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
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
  cursor: 'pointer',
  fontFamily: 'Menlo',
  fontSize: '16px',
  marginLeft: 'auto',
  padding: '15px 20px',
  textDecoration: 'none',
  transition: '.3s',

  ':hover': {
    background: '#fff',
    color: '#333'
  }
})

const Avatar = styled.img({
  borderRadius: '100%',
  marginLeft: 20,
  width: 75
})

function Header() {
  const [user, setUser] = useState({})
  const provider = new firebase.auth.GithubAuthProvider()
  provider.addScope('repo')

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbO50pwHrdC8ptrjxaR_OqqOfYQDm8BM8',
      authDomain: 'todayscodes-49059.firebaseapp.com',
      databaseURL: 'https://todayscodes-49059.firebaseio.com',
      projectId: 'todayscodes-49059',
      storageBucket: 'todayscodes-49059.appspot.com',
      messagingSenderId: '1015784084598',
      appId: '1:1015784084598:web:ca8d3bf3016d8f5d'
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      }
    })
  }

  function signIn() {
    if (!user.email) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          setUser(result.user)
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      alert('Redirect to commit submit page!')
    }
  }

  let profileImage = ''

  if (user.email) {
    profileImage = <Avatar src={user.providerData[0].photoURL} />
  }

  return (
    <Container>
      <LogoContainer>
        <Logo href="/">
          <span style={{ color: '#c3367c' }}>todays</span>.codes
        </Logo>
      </LogoContainer>
      <GitHubButton onClick={signIn}>
        <i className="fab fa-github fa-lg" style={{ marginRight: 15 }} />
        Share your commit
      </GitHubButton>
      {profileImage}
    </Container>
  )
}

export default Header
