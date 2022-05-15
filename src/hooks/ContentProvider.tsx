import { ThemeProvider } from "./ThemeProvider";
import { StoreProvider } from "./StoreProvider";
import { SessionProvider } from "next-auth/react";

type ProviderProps = {
  children: React.ReactNode;
  session: any
};

export const ContentProvider: React.FC<ProviderProps> = ({
  children,
  session
}) => {
  return (
    <StoreProvider>
      <SessionProvider
        session={session} 
        // Re-fetch session every 5 minutes
        refetchInterval={5 * 60}
        // Re-fetches session when window is focused
        refetchOnWindowFocus={true}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </SessionProvider>
    </StoreProvider>
  );
};