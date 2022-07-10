import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { SignInPage } from "../pages/SignIn"; 

export const Router = () => {
    return(<>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignInPage/>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="login" element={<SignInPage/>} />
          <Route path="contact" element={<div></div>} />
          <Route path="*" element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>)
}