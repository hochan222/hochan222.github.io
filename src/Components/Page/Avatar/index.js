import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        {/* <Avatar alt="Travis Howard" src="/static/images/avatar/1.jpg" /> */}
        <Avatar alt="Remy Sharp" src="https://placeimg.com/48/48/1" />
        <Avatar alt="Travis Howard" src="https://placeimg.com/48/48/2" />
        <Avatar alt="Cindy Baker" src="./logo192.png" />
      </div>
      <AvatarGroup>
        <Avatar alt="Remy Sharp" src="https://placeimg.com/48/48/3" />
        <Avatar alt="Travis Howard" src="https://placeimg.com/48/48/4" />
        <Avatar alt="Cindy Baker" src="https://placeimg.com/48/48/5" />
        <Tooltip title="Foo • Bar • Baz">
          <Avatar>+3</Avatar>
        </Tooltip>
      </AvatarGroup>
    </div>
  );
}