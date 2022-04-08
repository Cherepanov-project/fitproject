import { ContinueWithSocial, SocialLink } from './userLoginOrRegisterStyle';

import GoogleBtn from './SocialsBtns/GoogleBtn';
import MailBtn from './SocialsBtns/MailBtn';
import VkBtn from './SocialsBtns/VkBtn';
import YandexBtn from './SocialsBtns/YandexBtn';

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
