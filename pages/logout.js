import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

function Logout() {
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

    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location = '/'
      })
  }

  return <div>Logging out...</div>
}

export default Logout
