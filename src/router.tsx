import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Box, CircularProgress } from '@mui/material';

import { MainLayout } from './components/layout/MainLayout';
import { Route as CustomRoute, publicRoutes } from './config/routesConfig';

const AdminLoginView = lazy(() => import('./views/AdminLoginView'));
const AdminDashboardView = lazy(() => import('./views/AdminDashboardView'));
const AdminProductsView = lazy(() => import('./views/AdminProductsView'));
const AdminOrdersView = lazy(() => import('./views/AdminOrdersView'));

const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <CircularProgress />
  </Box>
);

const renderRoute = (route: CustomRoute) => {
  const Component = route.component;

  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Suspense fallback={<LoadingFallback />}>
          <Component />
        </Suspense>
      }
    >
      {route.children?.map(renderRoute)}
    </Route>
  );
};

const publicRoutesFiltered = publicRoutes.filter(
  (route) => !route.path.startsWith('/admin')
);

const renderRoutes = (routes: CustomRoute[]) => (
  <Routes>
    <Route element={<MainLayout />}>{routes.map(renderRoute)}</Route>
    {/* Admin routes without MainLayout */}
    <Route
      path="/admin/login"
      element={
        <Suspense fallback={<LoadingFallback />}>
          <AdminLoginView />
        </Suspense>
      }
    />
    <Route
      path="/admin/dashboard"
      element={
        <Suspense fallback={<LoadingFallback />}>
          <AdminDashboardView />
        </Suspense>
      }
    />
    <Route
      path="/admin/products"
      element={
        <Suspense fallback={<LoadingFallback />}>
          <AdminProductsView />
        </Suspense>
      }
    />
    <Route
      path="/admin/orders"
      element={
        <Suspense fallback={<LoadingFallback />}>
          <AdminOrdersView />
        </Suspense>
      }
    />
  </Routes>
);

export const AppRouter = () => <Router>{renderRoutes(publicRoutesFiltered)}</Router>;
