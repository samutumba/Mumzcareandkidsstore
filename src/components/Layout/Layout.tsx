import { useTheme } from "../../hooks";
import toast, { Toaster } from "react-hot-toast";
import { Modal, NavBar, Footer } from "..";

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
        <LayoutItems />
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

/**Component containing modals and toasts included in the layout */
const LayoutItems = () => {
    return (
      <>
        <Modal width={""} name={"logout"}>
          <div className="flex flex-col">
            <div className="font-bold text-2xl">
              Are you sure you want to log out?
            </div>
            <div className="flex justify-evenly mt-8">
              <label className="rounded-lg bg-error py-3 w-1/5 text-center text-base-100">
                <button>Yes</button>
              </label>
              <label
                htmlFor="modal-logout"
                className="rounded-lg py-3 w-1/5 text-center bg-base-content text-base-300"
              >
                <button>No</button>
              </label>
            </div>
          </div>
        </Modal>

        <Toaster position="top-right" reverseOrder={false} />
      </>
    );
}



