import styles from './Navigation.module.scss'
import RecipiesEditForm from '../RecipiesEditForm/RecipiesEditForm.tsx'

const Navigation = () => {
	return (
		<div className={styles.container}>
			<div className={styles.dashboard}>
				DashboardHere
			</div>
			<div className={styles.main}>
				<RecipiesEditForm/>
			</div>
		</div>
	)
}

export default Navigation