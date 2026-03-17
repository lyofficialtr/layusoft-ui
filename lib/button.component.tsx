import type { CSSProperties, MouseEventHandler } from "react";

export interface LyButtonProps {
    title: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLSpanElement>;

}

export function LyButton(props: LyButtonProps) {
    return (
        <div onClick={props.onClick}
            style={props.style ?? {}}
            className="py-4 px-12 text-white rounded cursor-pointer text-center text-xl exo-2-regular
            bg-linear-to-r from-red-500 to-purple-600 bg-size-[200%_100%] bg-position-[0%_0%] transition-all
             duration-1000 ease-in-out hover:bg-position-[100%_0%] hover:text-2xl shadow-2xl
            ">
            <span>{props.title}</span>
        </div>
    );
}