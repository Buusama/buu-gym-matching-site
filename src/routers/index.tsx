import useWindowSize from "../hooks/useWindowResize";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./types";
const LazyLoad = (Component: () => Promise<{ default: React.ComponentType<any> }>) => {
  const ComponentLazy = React.lazy(Component)
  return (props: any) => (
    <React.Suspense fallback={null}>
      <ComponentLazy {...props} />
    </React.Suspense>
  )
}

const PageHome = LazyLoad(() => import("pages/public/PageHome"));
const Page404 = LazyLoad(() => import("pages/error/Page404"));
const FooterNav = LazyLoad(() => import("components/FooterNav"))
const ScrollToTop = LazyLoad(() => import("./ScrollToTop"));
const SiteHeader = LazyLoad(() => import("components/SiteHeader"));
const Footer = LazyLoad(() => import("shared/Footer/Footer"));
const Login = LazyLoad(() => import("pages/auth/Login"));
const Register = LazyLoad(() => import("pages/auth/Register"));
const PageService = LazyLoad(() => import("pages/public/Service"));
export const pages: Page[] = [
  { path: "/", component: PageHome },
  { path: "/login", component: Login },
  { path: "/signup", component: Register },
  { path: "/services", component: PageService },
  { path: "*", component: Page404 },
];

const MyRoutes = () => {
  const WIN_WIDTH = useWindowSize().width || window.innerWidth;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteHeader />

      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
        <Route element={<Page404 />} />
      </Routes>

      {WIN_WIDTH < 768 && <FooterNav />}
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
