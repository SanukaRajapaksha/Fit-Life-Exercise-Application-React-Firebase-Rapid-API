// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration here
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'loginsignup-6dd32.firebaseapp.com',
  projectId: 'loginsignup-6dd32',
  storageBucket: 'loginsignup-6dd32.appspot.com',
  messagingSenderId: '369703823978',
  appId: '1:369703823978:web:b46f7be20c69779da87813',
  measurementId: 'G-L2QNSE1JPS',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.settings.appVerificationDisabledForTesting = true;

export { auth };
