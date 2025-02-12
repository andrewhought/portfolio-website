import { ReactElement } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

import { Button } from "../Button";

export default function Hero(): ReactElement {
    const handleHrefClick = (location: string): void => {
        window.open(location, "_blank");
    };

    return (
        <div className="mx-12 flex flex-col justify-between py-24 md:mx-24 lg:mx-48 xl:mx-72">
            <span className="flex text-3xl font-extrabold text-header sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Andrew Houghton
            </span>
            <span className="text-md mt-2 flex text-header md:text-lg lg:text-xl xl:text-2xl">
                Software Engineer
            </span>
            <span className="lg:text-md mt-4 flex text-xs font-light text-body md:text-sm xl:text-xl">
                Hello! I'm a recent graduate with a B.S. in Computer Science and
                Supply Chain Management. I have hands-on experience across
                various industries, including aerospace, education, and retail.
            </span>
            <div className="mt-8 flex flex-row">
                <Button
                    onClick={() =>
                        handleHrefClick("https://github.com/andrewhought")
                    }
                    icon={<IoLogoGithub />}
                />
                <div className="ml-4">
                    <Button
                        onClick={() =>
                            handleHrefClick(
                                "https://www.linkedin.com/in/andrewhought/"
                            )
                        }
                        icon={<IoLogoLinkedin />}
                    />
                </div>
            </div>
        </div>
    );
}
