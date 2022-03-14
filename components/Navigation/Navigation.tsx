import styles from './Navigation.module.scss'
import {RecipiesList} from '../RecipiesEditForm/RecipiesEditForm.tsx'

export const Navigation = () => {
	return (
		<div className={styles.container}>
			<div className={styles.dashboard}>
				DashboardHere
			</div>
			<div className={styles.main}>
				<RecipiesList/>
			</div>
		</div>
	)
}

