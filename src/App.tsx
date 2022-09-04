import React, { useEffect } from 'react';
import './App.css';
import { Router } from './routes';
import {
  RecoilRoot, useRecoilState, useRecoilValue
} from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// eslint-disable-next-line
import "swiper/css/bundle";
import toast, { Toaster } from 'react-hot-toast';
import { CookieBanner } from './components';
import { LoadingPage } from './pages';
import axios from 'axios';
import { fetchUserState, userState } from './atoms';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { API } from './api/https';
import { Loader } from './components/Loading/Loader';
import "react-phone-number-input/style.css";


const queryClient = new QueryClient({
   defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 15,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect:false,
      cacheTime: 1000 * 60 * 15,
      retry: false,
    },
  },
})

function App() {
  const [user, setUser] = useRecoilState(userState)
  const fetchUser = useRecoilValue(fetchUserState) 

  useEffect(() => {
    API.getUser().then(res => {
        setUser(res.data.user)
        } 
      )
      .catch(err => {
       setUser(null)
      })

  }, [fetchUser])

  return (
      <React.Suspense fallback={<LoadingPage />}>
      <Toaster position="top-right" reverseOrder={false} />
        <QueryClientProvider client={queryClient}>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      <CookieBanner />
      <Loader />
      </React.Suspense>
  );
}

export default App;
