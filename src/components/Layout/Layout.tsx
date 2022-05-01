import { useTheme } from "../../hooks";
import toast, { Toaster } from "react-hot-toast";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
}) => {
  const [theme, setTheme] = useTheme();

  //const [product, setProducts] = UseProductState();

  /**getProductsData().then(
      function(value){setProducts(value);},
      function(error){")}
  )**/
  //setProducts(getProductsData())

  if (theme == "d") {
    var classN = "dark";
  } else {
    var classN = "light";
  }

  toast.error("Failed to load products")
  return (
    <>
      <div className={classN}>
            <Toaster position="top-right" reverseOrder={false} />
            {children}
      </div>
    </>
  );
};



