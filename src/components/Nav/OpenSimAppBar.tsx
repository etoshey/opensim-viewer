import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import logo_dark from './logo-dark.svg';
import logo from './logo.svg';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import viewerState from '../../state/ViewerState';
import { NavLink } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next'

interface OpenSimAppBarProps {
    dark: boolean,
    isLoggedIn: boolean
}

const OpenSimAppBar: React.FC<OpenSimAppBarProps> = ({ dark, isLoggedIn }) => {
  const { t } = useTranslation();

  return (
  <AppBar position="static">
    <Toolbar variant="dense" color="inherit">
      <Link component={NavLink} to="/">
        <Box
          component="img"
          sx={{ height: 60 }}
          alt="Logo"
          src={dark ? logo_dark : logo}
        />
      </Link>
      
      <Link component={NavLink} to="/viewer" sx={{ marginLeft: "auto", textDecoration: 'none',}}>
        <Typography variant="button" color="secondary">
            {t('viewer')}
        </Typography>
      </Link>

      <Link component={NavLink} to="/models" sx={{ marginLeft: "1em", textDecoration: 'none',}}>
        <Typography variant="button" color="secondary">
            {t('models')}
        </Typography>
      </Link>

        <Tooltip title={t('topBar.switchTheme')}>
          <IconButton
            color="secondary"
            sx={{ ml: 1 }}
            onClick={() => {
              viewerState.setDark(!viewerState.dark);
            }} >
            {viewerState.dark ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Tooltip>
        <Tooltip title={t('topBar.info')}>
          <Link component={NavLink} to="/about">
              <IconButton color="secondary">
                <InfoTwoToneIcon />
              </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title={t('topBar.share')}>
          <IconButton color="secondary">
            <ShareTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={t('topBar.shareOnTwitter')}>
          <IconButton color="secondary">
            <TwitterIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={isLoggedIn ? t('topBar.logOut') : t('topBar.logIn')}>
          <Link component={NavLink} to={isLoggedIn ? "/log_out" : "/log_in"}>
              <IconButton color="secondary">
                {isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
              </IconButton>
          </Link>
        </Tooltip>
    </Toolbar>
  </AppBar>
  );
}

export default OpenSimAppBar
