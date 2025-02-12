import { ReactElement } from "react";

import Hero from "../components/sections/Hero";

export function App(): ReactElement {
    return (
        <div className="flex items-center justify-center">
            <Hero />
        </div>
    );
}
