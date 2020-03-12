import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import TableChartIcon from '@material-ui/icons/TableChart';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import BorderBottomIcon from '@material-ui/icons/BorderBottom';
import TimelineIcon from '@material-ui/icons/Timeline';
import TransformIcon from '@material-ui/icons/Transform';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto'
    },
};

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            toggle: false
        };
    }
handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
render() {
    const { classes } = this.props;
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                        <MenuIcon/>
                    </IconButton>
                </AppBar>
                <Drawer open={this.state.toggle}>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/">
                            <HomeIcon/>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/texts">
                            <TextFieldsIcon/>
                        </Link> 
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/table">
                            <TableChartIcon/>
                        </Link> 
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/avatar">
                            <AccountCircleIcon/>
                        </Link> 
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/photos">
                            <PhotoLibraryIcon/>
                        </Link> 
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/timeline">
                            <TimelineIcon/>
                        </Link> 
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/transform">
                            <TransformIcon/>
                        </Link> 
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/footer">
                            <BorderBottomIcon/>
                        </Link> 
                    </MenuItem>
                </Drawer>
            </div>
            <div id="content" style={{margin: 'auto', marginTop: '20px'}}>
                {React.cloneElement(this.props.children)}
            </div>
        </div>
        );
    }
}

export default withStyles(styles)(Navigation);

