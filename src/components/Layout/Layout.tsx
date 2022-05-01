import { useTheme } from "../../hooks";
import toast, { Toaster } from "react-hot-toast";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
}) => {
  const [theme, setTheme] = useTheme();

  if (theme == "d") {
    var classN = "dark";
  } else {
    var classN = "light";
  }

  return (
    <>
      <div className={classN}>
            <Toaster position="top-right" reverseOrder={false} />
            {children}
      </div>
    </>
  );
};



