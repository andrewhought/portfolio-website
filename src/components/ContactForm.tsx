import { Form } from "radix-ui";
import { ReactElement, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

import { Button } from "./Button";

export default function ContactForm(): ReactElement {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formSubmitted = () => {
        setIsSubmitted(!isSubmitted);
    };

    return (
        <div className="contact-form flex-row">
            {isSubmitted ? (
                <div className="contact-form flex-col">
                    <IoIosCheckmarkCircle size={109} />
                    <div className="mx-[30.5px] mt-[144.5px]">
                        <Button
                            title={"Submit another"}
                            onClick={formSubmitted}
                        />
                    </div>
                </div>
            ) : (
                <Form.Root spellCheck="false">
                    <Form.Field name="email">
                        <div>
                            <Form.Label className="text-xl font-bold">
                                EMAIL
                            </Form.Label>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="box-border flex w-80 min-w-0 items-center rounded-md bg-body px-2 py-4"
                                type="email"
                                placeholder="Enter an email"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field className="mt-3" name="phone">
                        <div>
                            <Form.Label className="text-xl font-bold">
                                PHONE
                            </Form.Label>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="flex w-80 min-w-0 items-center rounded-md bg-body px-2 py-4"
                                type="email"
                                placeholder="Enter a phone number"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field className="mt-8" name="message">
                        <div>
                            <Form.Label className="text-xl font-bold">
                                MESSAGE
                            </Form.Label>
                        </div>
                        <Form.Control asChild>
                            <textarea
                                className="flex h-32 w-80 min-w-0 resize-none items-center rounded-md bg-body px-2 py-4"
                                required
                                placeholder="Leave a message"
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Submit asChild>
                        <div className="mt-3">
                            <Button title={"Submit"} onClick={formSubmitted} />
                        </div>
                    </Form.Submit>
                </Form.Root>
            )}
        </div>
    );
}
