import { ReactElement } from "react";

import pfp from "../../public/pfp.jpeg";

export default function Home(): ReactElement {
    return (
        <div
            id="home"
            className="mx-12 mt-12 flex flex-col justify-between py-24 md:mx-24 lg:mx-48 xl:mx-72"
        >
            <div className="flex items-center justify-center">
                <img
                    className="mb-12 h-80 w-80 rounded-full object-cover"
                    src={pfp}
                />
            </div>
            <span className="flex whitespace-nowrap text-3xl font-extrabold text-header sm:text-4xl md:text-5xl">
                Andrew Houghton
            </span>
            <span className="mt-6 flex text-lg text-secondary md:text-xl lg:text-2xl xl:text-3xl">
                SOFTWARE ENGINEER
            </span>
            <span className="lg:text-md mt-2 flex text-xs font-light text-body md:text-sm xl:text-xl">
                Hello!👋 I'm a recent graduate with a B.S. in Computer Science
                and Supply Chain Management. I have hands-on experience across
                various industries, including aerospace, education, and retail.
            </span>
        </div>
    );
}
