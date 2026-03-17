import { Eye, EyeOff } from 'lucide-react';
import { useState, type ChangeEventHandler, type CSSProperties, type KeyboardEventHandler } from "react";


export interface LyPasswordProps {
    value?: string;
    style?: CSSProperties;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
    required?: boolean;
}

export function LyPasswordInput(props: LyPasswordProps) {
    const [open, setOpen] = useState(false);


    return (
        <div
            className="bg-yellow-50  exo-2-regular relative
            ">
            <input
                required={props.required ?? false}
                type={open ? "text" : "password"}
                className="p-4 border border-slate-100 rounded w-full text-xl shadow-xl text-center
                                outline-none transition-all focus:ring-2 focus:ring-yellow-200
                                "
                {...props} />


            <span onClick={() => setOpen(!open)} className="absolute right-5 top-5 cursor-pointer text-slate-300">
                {
                    open ? <Eye /> : <EyeOff />
                }
            </span>
        </div>
    );
}