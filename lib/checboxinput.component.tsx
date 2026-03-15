import type { ChangeEventHandler, CSSProperties, KeyboardEventHandler } from "react";

export interface LyCheckboxInputProps {
    name: string;
    value?: string;
    style?: CSSProperties;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;

}

export function LyCheckboxInput(props: LyCheckboxInputProps) {
    return (
        <div
            className="exo-2-regular flex flex-row gap-5 p-4 items-center  justify-around bg-yellow-50
            ">
        
            <input
                type="checkbox"
                className="
                    appearance-none w-5 h-5 rounded-full border-2 border-amber-900 bg-amber-250
                    checked:bg-red-600 checked:border-amber-200
                    transition-all duration-200 cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2
                "
                {...props}
            />
            <label className="text-xl exo-2-regular">AAAAA</label>
        </div>
    );
}