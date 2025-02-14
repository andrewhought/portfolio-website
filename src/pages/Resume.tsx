import { ReactElement } from "react";

import { Tag } from "../components/Tag";

export default function Resume(): ReactElement {
    return (
        <div
            id="resume"
            className="mx-12 mt-12 flex flex-col justify-between py-24 md:mx-24 lg:mx-48 xl:mx-72"
        >
            <span className="flex text-2xl font-extrabold text-header sm:text-3xl">
                Resume
            </span>
            <div>
                <span className="text-md mt-6 flex text-secondary md:text-lg lg:text-xl">
                    EDUCATION
                </span>
                <div>
                    <div className="flex flex-row justify-between">
                        <span className="md:text-md mt-3 flex text-sm font-light text-header lg:text-lg">
                            Ira A. Fulton Schools of Engineering, Arizona State
                            University
                        </span>
                        <span className="lg:text-md ml-4 mt-3 flex whitespace-nowrap text-xs font-light text-body md:text-sm">
                            December 2025
                        </span>
                    </div>
                    <span className="lg:text-md flex text-xs font-light text-body md:text-sm">
                        Bachelor of Science, Computer Science
                    </span>
                </div>
                <div>
                    <div className="flex flex-row justify-between">
                        <span className="md:text-md mt-3 flex text-sm font-light text-header lg:text-lg">
                            W. P. Carey School of Business, Arizona State
                            University
                        </span>
                        <span className="lg:text-md ml-4 mt-3 flex whitespace-nowrap text-xs font-light text-body md:text-sm">
                            May 2022
                        </span>
                    </div>
                    <span className="lg:text-md flex text-xs font-light text-body md:text-sm">
                        Bachelor of Science, Supply Chain Management
                    </span>
                </div>
            </div>
            <div>
                <span className="text-md mt-6 flex text-secondary md:text-lg lg:text-xl">
                    EXPERIENCE
                </span>
                <div>
                    <div className="flex flex-row justify-between">
                        <span className="md:text-md mt-3 flex text-sm font-light text-header lg:text-lg">
                            Garmin
                        </span>
                        <span className="lg:text-md ml-4 mt-3 flex whitespace-nowrap text-xs font-light text-body md:text-sm">
                            December 2023 – Present
                        </span>
                    </div>
                    <span className="lg:text-md flex text-xs font-light text-body md:text-sm">
                        Software Engineer Intern
                    </span>
                </div>
                <div>
                    <div className="flex flex-row justify-between">
                        <span className="md:text-md mt-3 flex text-sm font-light text-header lg:text-lg">
                            Arizona State University
                        </span>
                        <span className="lg:text-md ml-4 mt-3 flex whitespace-nowrap text-xs font-light text-body md:text-sm">
                            December 2023 – July 2024
                        </span>
                    </div>
                    <span className="lg:text-md flex text-xs font-light text-body md:text-sm">
                        Undergraduate Teaching Assistant
                    </span>
                </div>
                <div>
                    <div className="flex flex-row justify-between">
                        <span className="md:text-md mt-3 flex text-sm font-light text-header lg:text-lg">
                            Target
                        </span>
                        <span className="lg:text-md ml-4 mt-3 flex whitespace-nowrap text-xs font-light text-body md:text-sm">
                            May 2023 – August 2023
                        </span>
                    </div>
                    <span className="lg:text-md flex text-xs font-light text-body md:text-sm">
                        Software Engineer Intern
                    </span>
                </div>
            </div>
            <div>
                <span className="text-md mb-3 mt-6 flex text-secondary md:text-lg lg:text-xl">
                    TECHNICAL SKILLS
                </span>
                <div className="flex flex-wrap gap-3">
                    <Tag title="C/C++" />
                    <Tag title="Java" />
                    <Tag title="Python" />
                    <Tag title="TypeScript" />
                    <Tag title="Kotlin" />
                    <Tag title="Go" />
                    <Tag title="SQL" />
                    <Tag title="HTML/CSS" />
                    <Tag title="React" />
                    <Tag title="Electron" />
                    <Tag title="PostgreSQL" />
                    <Tag title="Kubernetes" />
                </div>
            </div>
        </div>
    );
}
