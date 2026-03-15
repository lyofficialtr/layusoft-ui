import type { ChangeEventHandler, CSSProperties, KeyboardEventHandler } from "react";

export interface LyInputProps {
    name: string;
    value?: string;
    style?: CSSProperties;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;

}

export function LyTextInput(props: LyInputProps) {
    return (
        <div
            className="bg-yellow-50  exo-2-regular
            ">
            <input
                className="p-4 border border-slate-100 rounded w-full text-xl shadow-xl text-center" 
                {...props}/>
        </div>
    );
}