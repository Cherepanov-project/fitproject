import styled from 'styled-components'
import styles from './Header.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const Header = () => {
	return (
		// <div className={styles.container}>
		<Stack
			direction='row'
			alignItems="center"
		>
			<Typography fontSize='24px'>
				Recipies
			</Typography>
			<div className={styles.icons}>
				<SearchIcon color="disabled" fontSize="small"/>
				<NotificationsIcon color="disabled" fontSize='small' sx={{mx: 2}}/>
			</div>
			<Typography fontSize='14px' sx={{ml:3}}>Jones Ferdinand</Typography>
			<Avatar
				alt="Remy Sharp"
				src="/static/images/avatar/1.jpg"
				sx={{ width: 24, height: 24, ml: 2 }}
			/>
		</Stack>
		// </div>
	)
}

export default Header
