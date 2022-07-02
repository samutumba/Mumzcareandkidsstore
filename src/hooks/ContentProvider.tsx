import { IconContext } from "react-icons";
import { StoreProvider } from "./StoreProvider";
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { FC } from "react";
import { ThemeProvider, useTheme } from 'next-themes'

// Create a client
const queryClient = new QueryClient()

type ProviderProps = {
  children: React.ReactNode | any;
};

export const ContentProvider: React.FC<ProviderProps> = ({
  children
}) => {
  
 
  return (
    <StoreProvider>
      <ThemeProvider>
        <Theme>
          <IconContext.Provider value={{ className: "inline-block -mr-1" }}>       
              <QueryClientProvider client={queryClient}> 
                {children}
              </QueryClientProvider>
          </IconContext.Provider>  
        </Theme>
      </ThemeProvider>  
    </StoreProvider>
  );
};

interface IThemeProvider {
  children: React.ReactNode | any;
}

const Theme: FC<IThemeProvider> = ({children}) => {
  const { theme, setTheme } = useTheme()

  return(
  <div className={theme||"light"} >
    {children}
  </div>)

}