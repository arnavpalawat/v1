import Image from "next/image";
// https://unsplash.com/photos/2s6ORaJY6gI
import profile from "../images/temp-pfp.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium, faMastodon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Profile = () => {
    return(
    <div>
        <div className="flex justify-between mb-6">
            <div className="relative min-w-[80px] w-[min(30%,128px)] h-[min(30%,128px)] mt-[max(-18%,-80px)] rounded-full overflow-hidden">
                <div className="pb-[100%] w-full bg-white dark:bg-dark" />
                {/* text-[0px] because for some strange reason inline block adds spaces... */}
                <Image src={profile} sizes="33vw" className="top-[4px] left-[4px] absolute w-[calc(100%-8px)] h-[calc(100%-8px)] text-[0px] rounded-full overflow-hidden object-cover" priority={true} alt="Profile Picture" />
            </div>
            {/* md:text-lg */}
            <div className="flex space-x-7 text-sub-light dark:text-sub-dark text-2xl self-end pr-1 pb-1 pt-4 md:pt-5">
                <a aria-label="GitHub Link" className="flex items-center space-x-3" href="https://github.com/arnavpalawat">
                    <FontAwesomeIcon icon={faGithub} className="md:pb-[2px]" />
                    {/* <p className="hidden font-mono font-medium text-sm md:block">GitHub</p> */}
                </a>
                <a aria-label="Medium Link" className="flex items-center space-x-3" href="https://medium.com/@arnavpalawat">
                    <FontAwesomeIcon icon={faMedium} className="md:pb-[2px]" />
                    {/* <p className="hidden font-mono font-medium text-sm md:block">Medium</p> */}
                </a>
                <a aria-label="Mastodon Link" className="flex items-center space-x-3" href="https://linkedin.com/in/arnavpalawat" rel="me">
                    <FontAwesomeIcon icon={faLinkedin} className="md:pb-[2px]" />
                    {/* <p className="hidden font-mono font-medium text-sm md:block">Mastodon</p> */}
                </a>
                <a aria-label="Email Link" className="flex items-center space-x-3" href="mailto:arnavpalawat@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="md:pb-[2px]" />
                    {/* <p className="hidden font-mono font-medium text-sm md:block">Contact</p> */}
                </a>
            </div>
        </div>
        <h1 className="font-inter font-bold text-main-light dark:text-main-dark text-xl md:text-[22px] mb-1">
            Hello! I'm Arnav Palawat.
        </h1>
        <p className="font-inter font-[475] text-sub-light dark:text-main-dark text-sm md:text-[15px] leading-snug md:leading-[1.4]">
            I'm a high-school rising senior, full stack developer, and aspiring management consultant from the Greater Boston Area.
        </p>
    </div>
    )
}

export default Profile;
