import { Popover } from "radix-ui";
import { ReactElement } from "react";
import {
    IoIosClose,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMdContact
} from "react-icons/io";

import { Button } from "../components/Button";

export default function SocialBar(): ReactElement {
    const handleHrefClick = (location: string): void => {
        window.open(location, "_blank");
    };

    return (
        <div className="mt-16 flex flex-row items-center justify-center">
            <div className="mr-3">
                <Popover.Root>
                    <Popover.Trigger asChild>
                        <button className="btn p-2 sm:text-xl md:text-2xl">
                            <IoMdContact />
                        </button>
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content
                            className="relative flex flex-col rounded-lg bg-body p-4"
                            side="top"
                            sideOffset={7}
                        >
                            <div className="flex flex-col p-4">
                                {" "}
                                <div className="flex flex-col space-y-2 text-primary">
                                    <label className="px-2">
                                        andrewhought@protonmail.com
                                    </label>
                                    <label className="px-2">
                                        (480) 399-9777
                                    </label>
                                </div>
                            </div>
                            <Popover.Close className="absolute right-2 top-2 p-1">
                                <IoIosClose size={20} />
                            </Popover.Close>
                        </Popover.Content>
                    </Popover.Portal>
                </Popover.Root>
            </div>
            <div className="mr-3">
                <Button
                    onClick={() =>
                        handleHrefClick("https://github.com/andrewhought")
                    }
                    icon={<IoLogoGithub />}
                />
            </div>
            <div className="mr-3">
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
    );
}
