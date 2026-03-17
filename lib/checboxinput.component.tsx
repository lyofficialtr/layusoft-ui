import { Check } from "lucide-react";
import { type CSSProperties } from "react";

export interface LyCheckboxInputProps {
    label: string;
    isChecked: boolean;
    setIsChecked: (v: boolean) => void;
    style?: CSSProperties;
    required?: boolean;
}

export function LyCheckboxInput(props: LyCheckboxInputProps) {
    return (
        <label className="group flex items-start gap-3 cursor-pointer select-none bg-yellow-50 p-4 rounded shadow-xl
        border-2 border-yellow-200">
            <div className="relative flex items-center">
                <input
                    type="checkbox"
                    style={props.style}
                    checked={props.isChecked}
                    onChange={() => props.setIsChecked(!props.isChecked)}
                    className="sr-only"
                />

                <div className={`
                    w-6 h-6 rounded-md border-2 transition-all duration-200 flex items-center justify-center
                    ${props.isChecked
                        ? 'bg-yellow-600 border-yellow-600 shadow-lg shadow-yellow-200'
                        : 'bg-white border-gray-300 group-hover:border-yellow-400'}
                    `}>
                    <Check
                        size={16}
                        strokeWidth={4}
                        className={`text-white transition-transform duration-200 ${props.isChecked ? 'scale-100' : 'scale-0'}`}
                    />
                </div>
            </div>

            {/* Text Label */}
            <div className="flex flex-col -mt-0.5">
                <span className={`text-lg font-semibold transition-colors ${props.isChecked ? 'text-gray-900' : 'text-gray-600'}`}>
                    {props.label}
                </span>
            </div>
        </label>
    );
}