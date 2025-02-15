import { Menubar } from "radix-ui";
import { ReactElement } from "react";

export default function MenuBar(): ReactElement {
    return (
        <div className="fixed left-0 right-0 top-4 mx-12 min-w-[394px] md:mx-24 lg:mx-48 xl:mx-72">
            <Menubar.Root className="flex w-full max-w-full justify-evenly rounded-lg bg-secondary px-8 py-3 opacity-90">
                <Menubar.Menu>
                    <Menubar.Trigger
                        className="text-md font-extrabold text-header transition-transform duration-300 hover:translate-y-[-4px] sm:text-xl md:text-2xl lg:text-3xl"
                        onClick={() =>
                            document
                                .getElementById("home")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Home
                    </Menubar.Trigger>
                </Menubar.Menu>
                <Menubar.Menu>
                    <Menubar.Trigger
                        className="text-md font-extrabold text-header transition-transform duration-300 hover:translate-y-[-4px] sm:text-xl md:text-2xl lg:text-3xl"
                        onClick={() =>
                            document
                                .getElementById("resume")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Resume
                    </Menubar.Trigger>
                </Menubar.Menu>
                <Menubar.Menu>
                    <Menubar.Trigger
                        className="text-md font-extrabold text-header transition-transform duration-300 hover:translate-y-[-4px] sm:text-xl md:text-2xl lg:text-3xl"
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Contact
                    </Menubar.Trigger>
                </Menubar.Menu>
            </Menubar.Root>
        </div>
    );
}
