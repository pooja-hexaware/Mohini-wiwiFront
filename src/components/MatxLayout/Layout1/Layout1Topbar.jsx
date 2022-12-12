import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'common/hooks/useAuth'
import useSettings from 'common/hooks/useSettings'
import { styled, useTheme, Box } from '@mui/system'
import { Span } from '../../../components/Typography'
import { MatxMenu, MatxSearchBox } from 'components'
// import ShoppingCart from '../../ShoppingCart/ShoppingCart'
//import NotificationBar from '../../NotificationBar/NotificationBar'
import { themeShadows } from 'components/MatxTheme/themeColors'
import { Grid, LinearProgress, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//import { NotificationProvider } from 'common/contexts/NotificationContext'
import bgImg from "../Layout1/pic6.jpg"
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddToCartButton from '../../AddToCartButton/AddToCartButton';
import {
    Icon,
    IconButton,
    MenuItem,
    Avatar,
    useMediaQuery,
    Hidden,
} from '@mui/material'
import { topBarHeight } from 'utils/constant'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffffff",
    '&:hover': {
        backgroundColor: "#ffffff",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
}))

const TopbarRoot = styled('div')(({ theme }) => ({
    top: 0,
    zIndex: 96,
    transition: 'all 0.3s ease',
    boxShadow: themeShadows[8],
    height: topBarHeight,
    // backgroundImage: `url(${bgImg})`,
}))

const TopbarContainer = styled(Box)(({ theme }) => ({
    padding: '8px',
    paddingLeft: 18,
    paddingRight: 20,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#3366cc',
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 14,
        paddingRight: 16,
    },
    //   backgroundImage: `url(${bgImg})`,
}))

const UserMenu = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 24,
    padding: 4,
    '& span': {
        margin: '0 8px',
    },
}))

const StyledItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    minWidth: 185,
    '& a': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& span': {
        marginRight: '10px',
        color: theme.palette.text.primary,

        // backgroundcolor:'#944dff'
    },
}))

// const IconBox = styled('div')(({ theme }) => ({
//     display: 'inherit',
//     [theme.breakpoints.down('md')]: {
//         display: 'none !important',
//     },
// }))

const Layout1Topbar = () => {
    const theme = useTheme()
    const { settings, updateSettings } = useSettings()
     const { logout, user } = useAuth()
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'))

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: {
                leftSidebar: {
                    ...sidebarSettings,
                },
            },
        })
    }

    // const handleSidebarToggle = () => {
    //     let { layout1Settings } = settings
    //     let mode
    //     if (isMdScreen) {
    //         mode =
    //             layout1Settings.leftSidebar.mode === 'close'
    //                 ? 'mobile'
    //                 : 'close'
    //     } else {
    //         mode =
    //             layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full'
    //     }
    //     updateSidebarMode({ mode })
    // }

    return (
        <TopbarRoot>
            <TopbarContainer>
                <Box display="flex">
                    <Typography variant="h4" component="h4" sx={{ fontSize: 25, fontWeight: 'bold' }} color="#ffffff" gutterBottom>
                        WiWi Food App (Capstone)
                    </Typography>;
                </Box>
                <Box display="flex" alignItems="center">
                    <IconButton color="primary" aria-label="add to shopping cart">
                      
                    </IconButton>  <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>  <AddShoppingCartIcon />
                    <MatxMenu
                        menuButton={
                            <UserMenu>
                                <Hidden xsDown>
                                    <Span sx={{ color: '#fffff' }}>
                                        Hi <strong>{user.name ?? "User"}</strong>
                                    </Span>
                                </Hidden>
                                <Avatar
                                    src={user.avatar}
                                    sx={{ cursor: 'pointer' }}
                                />
                            </UserMenu>
                        }
                    >
                        <StyledItem>
                            <Link to="/page-layouts/user-profile">
                                <Icon> person </Icon>
                                <Span> Profile </Span>
                            </Link>
                        </StyledItem>
                        <StyledItem>
                            <Icon> settings </Icon>
                            <Span> Settings </Span>
                        </StyledItem>
                        <StyledItem onClick={logout}>
                            <Icon> power_settings_new </Icon>
                            <Span> Logout </Span>
                        </StyledItem>
                    </MatxMenu>

                </Box>
            </TopbarContainer>
        </TopbarRoot>
    )
}

export default React.memo(Layout1Topbar)
