
import { VscLoading } from "react-icons/vsc"
import React from "react";
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react'
 

type ProviderProps = {
  children: React.ReactNode;
};

let persistor = persistStore(store);

export const StoreProvider: React.FC<ProviderProps> = ({ children }) => {
    
  return (
      <Provider store={store}>
        <PersistGate loading={<div className="text-6xl bg-blur-sm animate-spin"><VscLoading /></div>} persistor={persistor}>
          <React.Suspense fallback={<div className="text-4xl bg-blur-sm animate-spin"><VscLoading /></div>}>{children}</React.Suspense>
        </PersistGate> 
      </Provider>
  );
};


