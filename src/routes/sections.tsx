import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

import Editmanually from 'src/sections/Editmanually';

// ----------------------------------------------------------------------

export const DashboardPage = lazy(() => import('src/pages/dashboard'));
export const CreateCardPage = lazy(() => import('src/pages/createcard'));
export const ProjectPage = lazy(() => import('src/pages/project'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const SignUpPage = lazy(() => import('src/sections/signuppage'));
export const RulesGeneratorPage = lazy(() => import('src/pages/rulesgenerator'));
export const OrderHistoryPage = lazy(() => import('src/pages/orderhistory'));
export const ModifyCardsPage = lazy(() => import('src/pages/modifycards'));
export const SettingsPage = lazy(() => import('src/pages/settings'));
export const NotificationsPage = lazy(() => import('src/pages/notification'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const editmanually = lazy(() => import('src/sections/Editmanually'));
export const CreateCard1 = lazy(() => import('src/sections/CreateCard1'));
export const DrawCard = lazy(() => import('src/sections/DrawCard'));
export const EditCardBox = lazy(() => import('src/components/EditCardBox'));
export const PDFExport = lazy(() => import('src/components/PDFExport'));
export const Ordershiping = lazy(() => import('src/components/Ordershiping'));
export const ProfilePage = lazy(() => import('src/components/Profile'));






const renderFallback = () => (
  <Box
    sx={{
      display: 'flex',
      flex: '1 1 auto',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export const routesSection: RouteObject[] = [
  {
    element: (
      <DashboardLayout>
        <Suspense fallback={renderFallback()}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'project', element: <ProjectPage /> },
      { path: 'rulesgenerator', element: <RulesGeneratorPage /> },
      { path: 'createcard', element: <CreateCardPage /> },
      { path: 'drawcard/:cardId', element: <DrawCard /> },
      { path: 'orderhistory', element: <OrderHistoryPage /> },
      { path: 'modifycards', element: <ModifyCardsPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'settings/notification', element: <NotificationsPage /> },
      { path: 'editmanually', element: <Editmanually /> },
      { path: 'CreateCard1', element: <CreateCard1 /> },
      { path: 'EditCardBox', element: <EditCardBox /> },
      { path: 'PDFExport', element: <PDFExport /> },
      { path: 'Ordershiping', element: <Ordershiping /> },
      { path: 'profile', element: <ProfilePage /> },







    ],
  },
  {
    path: 'sign-in',
    element: (
      <AuthLayout>
        <SignInPage />
      </AuthLayout>
    ),
  },
  {
    path: 'sign-up',
    element: (
      // <AuthLayout>
        <SignUpPage />
    ),
  },
  {
    path: '404',
    element: <Page404 />,
  },
  { path: '*', element: <Page404 /> },
];
