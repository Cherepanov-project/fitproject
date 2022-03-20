import GoogleBtn from './SocialsBtns/GoogleBtn';
import MailBtn from './SocialsBtns/MailBtn';
import VkBtn from './SocialsBtns/VkBtn';
import YandexBtn from './SocialsBtns/YandexBtn';

import { ContinueWithSocial, SocialLink, SocialImg } from './userLoginOrRegisterStyle';
import apple from '../../common/images/icons/apple.png';
import Facebook from '../../common/images/icons/Facebook.png';
import google from '../../common/images/icons/google.png';

export const RegOrLoginSocial = () => {
  return (
    <ContinueWithSocial>
      <div>or continue with</div>
      <SocialLink>
        <GoogleBtn />
        <MailBtn />
        <VkBtn />
        <YandexBtn />
      </SocialLink>
    </ContinueWithSocial>
  );
};
