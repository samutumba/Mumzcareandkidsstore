import React from 'react';
import './App.css';
import { Router } from './routes';
import {
  RecoilRoot
} from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// eslint-disable-next-line
import "swiper/css/bundle";
import { Toaster } from 'react-hot-toast';
import { CookieBanner } from './components';
import { LoadingPage } from './pages';

const queryClient = new QueryClient()

function App() {



  return (
    <div className="App">
      <React.Suspense fallback={<div><LoadingPage /></div>}>
      <Toaster position="top-right" reverseOrder={false} />
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Router />
          </RecoilRoot>
        </QueryClientProvider>
      </React.Suspense>
      <CookieBanner />
    </div>
  );
}

export default App;
