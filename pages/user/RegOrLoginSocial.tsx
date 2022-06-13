import {
    REDIRECT_GOOGLE_BTN,
    GOOGLE_IMG,
    REDIRECT_YANDEX_BTN,
    YANDEX_IMG,
    REDIRECT_MAIL_BTN,
    MAIL_IMG,
    REDIRECT_VK_BTN,
    VK_IMG,
} from "../../utils/urls"

import { ContinueWithSocial, SocialLink } from "./userLoginOrRegisterStyle"

import SocialLoginBtn from "./SocialsBtns/SocialLoginBtn"

export const RegOrLoginSocial = () => {
    return (
        <ContinueWithSocial>
            <div>or continue with</div>
            <SocialLink>
                <SocialLoginBtn
                    redirectURL={REDIRECT_VK_BTN}
                    typeOfSocial="vk"
                    img={VK_IMG}
                />
                <SocialLoginBtn
                    redirectURL={REDIRECT_MAIL_BTN}
                    typeOfSocial="mail"
                    img={MAIL_IMG}
                />
                <SocialLoginBtn
                    redirectURL={REDIRECT_YANDEX_BTN}
                    typeOfSocial="yandex"
                    img={YANDEX_IMG}
                />
                <SocialLoginBtn
                    redirectURL={REDIRECT_GOOGLE_BTN}
                    typeOfSocial="google"
                    img={GOOGLE_IMG}
                />
            </SocialLink>
        </ContinueWithSocial>
    )
}
