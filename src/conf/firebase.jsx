import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDnBsEx2N0xot6oB-VM0Oa1ZpGZ_nG3Y4Y',
  authDomain: 'react-todo-app-f9cff.firebaseapp.com',
  projectId: 'react-todo-app-f9cff',
  storageBucket: 'react-todo-app-f9cff.appspot.com',
  messagingSenderId: '267441445998',
  appId: '1:267441445998:web:b9ec12054a2549eb079a7f',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
