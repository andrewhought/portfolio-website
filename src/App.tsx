import { ReactElement } from "react";

import MenuBar from "./components/MenuBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

export function App(): ReactElement {
    return (
        <div className="flex flex-col justify-center">
            <MenuBar />
            <Home />
            <Resume />
            <Contact />
        </div>
    );
}
