import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';

interface Props extends LinkProps {
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

export const DrawerItem: React.FC<Props> = ({ to, label, Icon }) => {
  return (
    <Link to={to}>
      <ListItem button>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  );
};
