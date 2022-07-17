import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { 
  ApparelPage,
  BabiesAndKidsPage, 
  MotherHoodPage, 
  SearchPage, 
  YouthPage, 
  Home,
  LoginPage,
  SignInPage,
  UnknownPage,
  HelpPage
} from "../pages";

export const Router = () => {
    return(<>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignInPage/>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignInPage/>} />
          <Route path="search" element={<SearchPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="category" >
            <Route index element={<Navigate replace to="/" />} />
            <Route path="babies-and-kids" element={<BabiesAndKidsPage />} />
            <Route path="apparel" element={<ApparelPage />} />
            <Route path="motherhood" element={<MotherHoodPage />} />
            <Route path="youth" element={<YouthPage />} />
          </Route>
          <Route path="*" element={<UnknownPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>)
}