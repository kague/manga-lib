/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Avatar,
  Badge,
  ListItemText,
  ListItemAvatar,
  ListItem,
} from '@material-ui/core';
import { Storage, MenuBook, Storefront } from '@material-ui/icons';

import FindReplaceIcon from '@material-ui/icons/FindReplace';
import HomeIcon from '@material-ui/icons/Home';
import CancelIcon from '@material-ui/icons/Cancel';
import DeviceUnknownIcon from '@material-ui/icons/DeviceUnknown';
import WorkOffIcon from '@material-ui/icons/WorkOff';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BusinessIcon from '@material-ui/icons/Business';

const Manga = ({ data: manga }) => {
  const labelId = `cb-${manga.id}`;

  return (
    <>
      <ListItem key={manga.id} button>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar ${manga.titre}`}
            src={`/static/avatar/${manga.image}`}
          />
        </ListItemAvatar>
        <ListItemText id={labelId}>
          {manga.titre}

          <span style={{ float: 'right' }}>
            <Badge badgeContent={manga.nombreLu} color="primary" showZero>
              <MenuBook />
            </Badge>
            {' -- '}
            <Badge badgeContent={manga.nombrePos} color="secondary" showZero>
              <Storage />
            </Badge>
            {' -- '}
            <Badge badgeContent={manga.nombreTot} color="error" showZero>
              <Storefront />
            </Badge>
            {' -- '}
            {manga.fini ? <CancelIcon /> : <DeviceUnknownIcon />}
            {'  '}
            {manga.statut === 'Rech' ? (
              <FindReplaceIcon />
            ) : manga.statut === 'AL' ? (
              <MenuBookIcon />
            ) : manga.statut === 'InC' ? (
              <HelpOutlineIcon />
            ) : (
              <WorkOffIcon />
            )}
            {'  '}
            {manga.maison ? <HomeIcon /> : <BusinessIcon />}
          </span>
        </ListItemText>
      </ListItem>
    </>
  );
};

export default Manga;
