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

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App h-full min-h-screen overflow-visible">
      <Toaster position="top-right" reverseOrder={false} />
      <React.Suspense fallback={<div>...Loading</div>}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Router />
          </RecoilRoot>
        </QueryClientProvider>
      </React.Suspense>
    </div>
  );
}

export default App;
