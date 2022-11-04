import { Suspense } from "react";
import { lazily } from "react-lazily";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Toast from "./components/Toast/Toast";
const {
  HomePage,
  SignInPage,
  DashboardPage,
  OrdersPage,
  ProductsPage,
  AccountsPage,
  ProductPage,
  CartPage,
  ViewProductsPage,
  ProfilePage,
  FavoritePage,
  ChangePasswordPage,
  MyOrdersPage,
  RecentProductsPage,
} = lazily(() => import("./pages"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="dang-nhap" element={<SignInPage />} />
            <Route path="thong-tin-tai-khoan" element={<ProfilePage />} />
            <Route path="don-hang-cua-toi" element={<MyOrdersPage />} />
            <Route path="san-pham-da-xem" element={<RecentProductsPage />} />
            <Route path="san-pham-yeu-thich" element={<FavoritePage />} />
            <Route path="doi-mat-khau" element={<ChangePasswordPage />} />
            <Route path="gio-hang" element={<CartPage />} />
            <Route path="bang-dieu-khien" element={<DashboardPage />} />
            <Route path="danh-sach-don-hang" element={<OrdersPage />} />
            <Route path="danh-sach-tai-khoan" element={<AccountsPage />} />
            <Route path="danh-sach-san-pham" element={<ProductsPage />} />
            <Route path="san-pham">
              <Route path=":slug" element={<ProductPage />} />
            </Route>
            <Route path="danh-muc">
              <Route path=":slug" element={<ViewProductsPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
      <ScrollToTop />
      <Toast />
    </>
  );
}

export default App;
