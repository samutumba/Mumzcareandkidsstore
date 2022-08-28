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
  ProductPage,
  HelpPage,
  CartPage
} from "../pages";

export const Router = () => {
    return(<div className="font-p">
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignInPage/>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignInPage/>} />
            <Route path="search" element={<SearchPage />} />
            <Route path="wishlist" element={<SearchPage />} />
            <Route path="cart" element={<CartPage />} />
          <Route path="product/:id" element={<ProductPage />} />
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
    </div>)
}