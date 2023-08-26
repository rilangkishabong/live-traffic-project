import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone';
import { ListSubheader } from '@mui/material';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PublicTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Display 1" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PublicTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Display 2" />
        </ListItemButton>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Tune Maps
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <TuneTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Display 1" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <TuneTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Display 2" />
        </ListItemButton>

    </React.Fragment>
);