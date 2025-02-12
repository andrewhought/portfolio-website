import { ReactElement } from "react";

interface TagProps {
    title: string;
}

export function Tag(props: TagProps): ReactElement {
    const { title } = props;

    return <div className="tag">{title}</div>;
}
