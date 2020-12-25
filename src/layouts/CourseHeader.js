import React, { useState } from 'react';
import { makeStyles, Button, AppBar, Toolbar, Typography, Drawer, IconButton, MenuItem, Menu } from '@material-ui/core'
import { ChevronLeft, ChevronRight, AccountCircle } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import { teal } from '@material-ui/core/colors'
import { Link } from 'react-router-dom'

import CourseDrawer from '../courses/CourseDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  appbar: {
    minHeight: '50px',
    // backgroundColor: teal[500],
    backgroundColor: '#15141F',
    justifyContent: 'center'
  },
  drawerButton: {
    border: "1px solid white",
    color: "white"
  },
  disableArrow: {
    color: 'grey'
  }
}));

const CourseHeader = props => {
  const classes = useStyles();

  // drawer open
  const [open, setOpen] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.appbar}>
          <React.Fragment>
            <Button onClick={toggleDrawer} variant="outlined" className={classes.drawerButton} startIcon={<MenuIcon />}>{props.section.title}</Button>
            <Drawer open={open} onClose={toggleDrawer}>
              <CourseDrawer course_id={props.course_id} chapter_id={props.chapter._id.$oid} section={props.section} sections={props.chapter.sections} />
            </Drawer>
          </React.Fragment>
          <div className={classes.grow} />
          {
            props.section.prev_section ?
            props.section.idx === 1 ?
            <Link to={`/courses/${props.course_id}/chapters/${props.section.prev_chapter.$oid}/sections/${props.section.prev_section.$oid}`}>
              <ChevronLeft />
            </Link>
            :
            <Link to={`/courses/${props.course_id}/chapters/${props.chapter._id.$oid}/sections/${props.section.prev_section.$oid}`}>
              <ChevronLeft />
            </Link>
            :
            <ChevronLeft className={classes.disableArrow} />
          }
          <div style={{fontSize: '1.25rem', height: '32px', width: '100px', textAlign: 'center'}}>{props.section.idx}/{props.chapter.sections.length}</div>
          {
            props.section.next_section ?
            props.section.idx === props.chapter.sections.length ?
            <Link to={`/courses/${props.course_id}/chapters/${props.section.next_chapter.$oid}/sections/${props.section.next_section.$oid}`}>
              <ChevronRight />
            </Link>
            :
            <Link to={`/courses/${props.course_id}/chapters/${props.chapter._id.$oid}/sections/${props.section.next_section.$oid}`}>
              <ChevronRight />
            </Link>
            :
            <ChevronRight className={classes.disableArrow} />
          }
          <div className={classes.grow} />
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default CourseHeader;