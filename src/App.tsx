import React, { useEffect } from 'react';
import './App.css';
import { Router } from './routes';
import {
  RecoilRoot, useRecoilState
} from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query'

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
import { userState } from './atoms';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

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

  useEffect(() => {
    axios.get(`https://api.mumzcareandkidsstore.com/auth/login/user`, { withCredentials: false })
      .then(res => {
        setUser(res.data.user)
        toast.success(res.data.message)} 
      )
      .catch(err => {
        //toast.error(err.response.data.message)
      })

  }, [user])

  return (
      <React.Suspense fallback={<LoadingPage />}>
        <div>{user?.name}</div>
      <Toaster position="top-right" reverseOrder={false} />
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
        <CookieBanner />
      </React.Suspense>
  );
}

export default App;
