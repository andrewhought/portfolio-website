import { ReactElement } from "react";

import ContactForm from "../components/ContactForm";
import SocialBar from "../components/SocialBar";

export default function Contact(): ReactElement {
    return (
        <div
            id="contact"
            className="mx-12 mt-12 flex flex-col justify-between py-24 md:mx-24 lg:mx-48 xl:mx-72"
        >
            <span className="mb-8 flex text-2xl font-extrabold text-header sm:text-3xl md:text-4xl">
                Contact
            </span>
            <ContactForm />
            <SocialBar />
        </div>
    );
}
