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

const PageHome3 = LazyLoad(() => import("pages/public/PageHome/PageHome3"));
const Page404 = LazyLoad(() => import("containers/Page404/Page404"));
const FooterNav = LazyLoad(() => import("components/FooterNav"))
const ScrollToTop = LazyLoad(() => import("./ScrollToTop"));
const SiteHeader = LazyLoad(() => import("containers/SiteHeader"));
const Footer = LazyLoad(() => import("shared/Footer/Footer"));
const Login = LazyLoad(() => import("pages/auth/Login"));
export const pages: Page[] = [
  { path: "/", component: PageHome3 },
  { path: "/login", component: Login },
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
