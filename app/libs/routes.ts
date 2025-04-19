import { DashboardCustomizeOutlined as DashboardIcon } from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface RouteItem {
  type: 'group' | 'route';
}

export interface Route extends RouteItem {
  id: string;
  path: string;
  title: string;
  icon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
}

export interface Group extends RouteItem {
  id: string;
  title: string;
  children: Routes[];
  icon?: string;
}

export type Routes = Route | Group;

export const routes: Routes[] = [
  <Route>{
    id: 'dashboard',
    type: 'route',
    path: '/dashboard',
    title: 'Dashboard',
    icon: DashboardIcon,
  },
  <Group>{
    id: 'applications',
    type: 'group',
    title: 'Applications',
    children: [
      <Route>{
        id: 'dashboard/applications',
        type: 'route',
        path: '/dashboard/applications',
        title: 'Applications',
        icon: DashboardIcon,
      },
      // <Group>{
      //   id: 'analytics',
      //   type: 'group',
      //   title: 'Analytics',
      //   children: [
      //     <Route>{
      //       id: 'dashboard/applications/analytics',
      //       type: 'route',
      //       path: '/dashboard/applications/analytics',
      //       title: 'Applications Analytics',
      //       icon: DashboardIcon,
      //     },
      //   ],
      // },
    ],
  },
];
