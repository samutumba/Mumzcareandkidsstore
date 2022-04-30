import { useTheme } from "../../hooks";
import { UseProductData } from "../../hooks/StoreProvider";
import axios from "axios";
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
      function(error){toast.error("Failed to load products!")}
  )**/
  //setProducts(getProductsData())

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

function getProductsData() {
  //const data = await axios.get("http://localhost:3000/api/products");
  const data = [{name: "Something"}]
  return data;
}


