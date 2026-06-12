import React, { ComponentType, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from './routes';

const HomeView = lazy(() => import('../views/HomeView'));
const ServicesView = lazy(() => import('../views/ServicesView'));
const GalleryView = lazy(() => import('../views/GalleryView'));
const ContactView = lazy(() => import('../views/ContactView'));
const ShopView = lazy(() => import('../views/ShopView'));
const CartView = lazy(() => import('../views/CartView'));

// Component wrapper for redirect
const NotFoundRedirect: React.FC = () => {
  return React.createElement(Navigate, { to: ROUTES.HOME, replace: true });
};

export interface Route {
  path: string;
  component: ComponentType<any>;
  children?: Route[];
}

export const publicRoutes: Route[] = [
  {
    path: ROUTES.HOME,
    component: HomeView,
  },
  {
    path: ROUTES.SERVICES,
    component: ServicesView,
  },
  {
    path: ROUTES.GALLERY,
    component: GalleryView,
  },
  {
    path: ROUTES.CONTACT,
    component: ContactView,
  },
  {
    path: ROUTES.SHOP,
    component: ShopView,
  },
  {
    path: ROUTES.CART,
    component: CartView,
  },
  {
    path: '*',
    component: NotFoundRedirect,
  },
];
