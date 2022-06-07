import { IconContext } from "react-icons";
import { StoreProvider } from "./StoreProvider";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { FC } from "react";
import { ThemeProvider, useTheme } from 'next-themes'

// Create a client
const queryClient = new QueryClient()

type ProviderProps = {
  children: React.ReactNode | any;
  session: any
};

export const ContentProvider: React.FC<ProviderProps> = ({
  children,
  session
}) => {
  
 
  return (
    <StoreProvider>
      <ThemeProvider>
        <Theme>
          <SessionProvider
              session={session} 
              // Re-fetch session every 5 minutes
              refetchInterval={5 * 60}
              // Re-fetches session when window is focused
              refetchOnWindowFocus={true}
            >
              <IconContext.Provider value={{ className: "inline-block -mr-1" }}>       
                  <QueryClientProvider client={queryClient}> 
                    {children}
                  </QueryClientProvider>
              </IconContext.Provider>  
            </SessionProvider>
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
  <div className={theme} >
    {children}
  </div>)

}