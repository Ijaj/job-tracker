import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { routes, Route, Group, Routes } from '../libs/routes';
import ListItemButton from '@mui/material/ListItemButton';

const Sidenav = () => {
  const pathname = usePathname();
  const activeRoutes = recursiveGroupCheck(routes, pathname);
  const startingState = activeRoutes ? activeRoutes.reduce((acc, curr) => ({ ...acc, [curr]: true }), {}) : {};
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(startingState);

  const sx = (route: Route) => ({
    backgroundColor: pathname === route.path ? '#e3f2fd' : 'transparent',
    boxShadow: pathname === route.path ? 'inset 2px 0px 0px #1976d2' : 'none',
    pl: 2.5,
  });

  const handleGroupClick = (groupId: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  function recursiveGroupCheck(routes: Routes[], path: string | null, parents: string[] = []): string[] | null {
    for (const route of routes) {
      if(route.type === 'route' && (route as Route).path === path) {
        return parents;
      }
      if(route.type === 'group'){
        const group: Group = route as Group;
        const newParents = [...parents, group.id];
        if(group.children) {
          const result = recursiveGroupCheck(group.children, path, newParents);
          if (result) return result;
        }
      }
    }
    return null;
  }

  const renderRoutes = (routes: (Route | Group)[], order: number = 0) => {
    return routes.map((r) => {
      if (r.type === 'route') {
        const route: Route = r as Route;
        return (
          <ListItemButton
            key={route.id}
            component={Link}
            href={route.path}
            selected={pathname === route.path}
            sx={sx(route)}>
            {route.icon && (
              <ListItemIcon>
                <route.icon />
              </ListItemIcon>
            )}
            <ListItemText primary={route.title} />
          </ListItemButton>
        );
      } else if (r.type === 'group') {
        const route: Group = r as Group;
        return (
          <Fragment key={route.id}>
            <ListItemButton onClick={() => handleGroupClick(route.id)} sx={{ pl: order + 2 }}>
              {route.icon && (
                <ListItemIcon>
                  <route.icon />
                </ListItemIcon>
              )}
              <ListItemText primary={route.title} />
              {openGroups[route.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openGroups[route.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: order }}>
                {renderRoutes(route.children, order + 1)}
              </List>
            </Collapse>
          </Fragment>
        );
      }
    });
  };

  return (
    <List>
      {renderRoutes(routes)}
    </List>
  );
};

export default Sidenav;