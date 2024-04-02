import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "states";
import { fetchUser, selectAuthStatus } from "states/slices/auth";
import useWindowSize from "../hooks/useWindowResize";
import { Page } from "./types";
import DefaultLayout from "./DefaultLayout";
import AuthLayout from "./AuthLayout";
import { Role } from "enums";
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
const Page403 = LazyLoad(() => import("pages/error/Page403"));
const FooterNav = LazyLoad(() => import("components/FooterNav"))
const ScrollToTop = LazyLoad(() => import("./ScrollToTop"));
const SiteHeader = LazyLoad(() => import("components/SiteHeader"));
const Footer = LazyLoad(() => import("shared/Footer/Footer"));
const Login = LazyLoad(() => import("pages/auth/Login"));
const Register = LazyLoad(() => import("pages/auth/Register"));
const PageService = LazyLoad(() => import("pages/public/Service"));
const PageTrainer = LazyLoad(() => import("pages/public/Trainer"));
const PageBooking = LazyLoad(() => import("pages/private/member/Booking"));

export const authPages: Page[] = [
  { path: "/login", component: Login },
  { path: "/signup", component: Register },
];
export const publicPages: Page[] = [
  { path: "/services", component: PageService },
  { path: "/", component: PageHome },
  { path: "/trainers", component: PageTrainer },
];

export const memberPages: Page[] = [
  { path: "/booking", component: PageBooking },
];

export const trainerPages: Page[] = [
  { path: "/schedule", component: PageTrainer },
  { path: "/body-info", component: PageTrainer },
];
const MyRoutes = () => {
  const WIN_WIDTH = useWindowSize().width || window.innerWidth;
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthStatus);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  if (authStatus === "loading") return <div>Loading...</div>;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteHeader />

      <Routes>
        {publicPages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}

        {authPages.map(({ component, path }) => {
          const Component = component;
          return <Route element={<AuthLayout allowRoles={[]} />}>
            <Route key={path} path={path} element={<Component />} />
          </Route>
        })}

        {memberPages.map(({ component, path }) => {
          const Component = component;
          return <Route element={<DefaultLayout allowRoles={[Role.MEMBER]} />}>
            <Route key={path} path={path} element={<Component />} />
          </Route>
        })}

        {trainerPages.map(({ component, path }) => {
          const Component = component;
          return <Route element={<DefaultLayout allowRoles={[Role.TRAINER]} />}>
            <Route key={path} path={path} element={<Component />} />
          </Route>
        })}

        <Route key="*" path="*" element={<Page404 />} />
        <Route key="/403" path="/403" element={<Page403 />} />
      </Routes>

      {WIN_WIDTH < 768 && <FooterNav />}
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
