import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwd9aNz6Wu4xCSDYfE7AsB-Po50mIGZP4",
  authDomain: "mumz-care-and-kids-store.firebaseapp.com",
  projectId: "mumz-care-and-kids-store",
  storageBucket: "mumz-care-and-kids-store.appspot.com",
  messagingSenderId: "237015192610",
  appId: "1:237015192610:web:351cf0079ff3e359cfe67b",
  measurementId: "G-3YB0RLH08K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className='w-full h-full flex flex-col flex-wrap font-p scroll-smooth'>
     <React.StrictMode>
      <HelmetProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>
  </div>
 
);