import { ReactElement } from "react";

interface ButtonProps {
    title?: string;
    icon?: ReactElement;

    onClick(): void;
}

export function Button(props: ButtonProps): ReactElement {
    const { title, icon, onClick } = props;

    return (
        <button
            onClick={onClick}
            className={`btn ${title ? "px-3 py-2" : "p-2"}`}
        >
            {icon ? <div className={title ? "mr-2" : ""}>{icon}</div> : null}
            {title ? <span>{title}</span> : null}
        </button>
    );
}
