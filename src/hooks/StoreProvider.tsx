
import { VscLoading } from "react-icons/vsc"
import React from "react";
import { store } from '../redux/store'
import { Provider } from 'react-redux'


type ProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<ProviderProps> = ({ children }) => {
    
  return (
      <Provider store={store}>
          <React.Suspense fallback={<div className="text-4xl bg-blur-sm animate-spin"><VscLoading /></div>}>{children}</React.Suspense>
      </Provider>
  );
};


