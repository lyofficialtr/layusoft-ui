import type { ChangeEventHandler, CSSProperties, HTMLInputTypeAttribute, KeyboardEventHandler } from "react";

export interface LyInputProps {
    value?: string;
    style?: CSSProperties;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
    required?: boolean;
    type?: HTMLInputTypeAttribute;
}

export function LyTextInput(props: LyInputProps) {
    return (
        <div
            className="bg-yellow-50  exo-2-regular
            ">
            <input
                required={props.required ?? false}
                type={props.type ?? "text"}
                className="p-4 border border-slate-100 rounded w-full text-xl shadow-xl text-center ring:bg-slate-100
                outline-none transition-all focus:ring-2 focus:ring-yellow-200
                " 
                {...props}/>
        </div>
    );
}