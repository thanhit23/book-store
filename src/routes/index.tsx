import Authenticated from '../containers/Authenticated';
import MainLayout from '../containers/MainLayout';
import publicRoutes from './publicRoutes';
import authRoutes from './authRoutes';

const publicRoute = publicRoutes.map(({ path, element }) => ({
  path,
  element: <MainLayout>{element}</MainLayout>,
}));

const authRoute = authRoutes.map(({ path, index, component: Component }) => ({
  path,
  index,
  element: (
    <Authenticated>
      <Component />
    </Authenticated>
  ),
}));

const routes = () => [...publicRoute, ...authRoute];

export default routes;
