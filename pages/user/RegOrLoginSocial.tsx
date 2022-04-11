import { ContinueWithSocial, SocialLink, SocialImg } from "./userLoginOrRegisterStyle"
import apple from '../../common/images/icons/apple.png'
import Facebook from '../../common/images/icons/Facebook.png';
import google from '../../common/images/icons/google.png';

export const RegOrLoginSocial = () => (
	<ContinueWithSocial>
		<div>or continue with</div>
		<SocialLink>
			<a href='#' ><SocialImg width='36px' src={apple.src}></SocialImg></a>
			<a href='#' ><SocialImg width='36px' src={Facebook.src}></SocialImg></a>
			<a href='#' ><SocialImg width='36px' src={google.src}></SocialImg></a>
		</SocialLink>
	</ContinueWithSocial>
)