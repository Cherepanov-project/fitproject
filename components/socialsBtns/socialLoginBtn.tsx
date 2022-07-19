import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Cookies from "js-cookie"
import queryString from "query-string"

import { ISocialLoginBtn } from "@/models/loginOrRegisterInterfaces/interfaces"
import { loginUserWithSocials } from "@/API/userLogin"

const SocialLoginBtn: React.FC<ISocialLoginBtn> = ({ redirectURL, typeOfSocial, img }) => {
    const router = useRouter()

    const handleRedirect = () => {
        router.push(redirectURL)
    }

    const loginWithSocial = async () => {
        const typeOfSocialData = queryString.parse(window.location.hash)
        const responseURLCode = queryString.parse(
            window.location.search
        ).access_token

        if (typeOfSocialData.state === typeOfSocial) {
            const token = await loginUserWithSocials(responseURLCode)
            await Cookies.set(
                "userLogin",
                JSON.stringify({ type: typeOfSocial, access: token }),
                {
                    expires: 2,
                }
            )
            await router.push("/User/statistics")
        }
    }

    useEffect(() => {
        loginWithSocial()
    }, [])

    return (
        <button
            style={{ background: "none", border: "none" }}
            onClick={handleRedirect}
        >
            <img
                src={img}
                alt={typeOfSocial}
                width={40}
                height={40}
                style={{ cursor: "pointer", borderRadius: "50%" }}
            />
        </button>
    )
}

export default SocialLoginBtn
