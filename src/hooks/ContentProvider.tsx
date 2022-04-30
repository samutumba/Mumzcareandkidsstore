import { ThemeProvider } from "./ThemeProvider";
import { StoreProvider } from "./StoreProvider";

type ProviderProps = {
  children: React.ReactNode;
};

export const ContentProvider: React.FC<ProviderProps> = ({ children }) => {
    return (
      <StoreProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </StoreProvider>
    );
}