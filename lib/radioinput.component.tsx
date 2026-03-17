import { CheckCircle2 } from "lucide-react";
import { type ChangeEventHandler, type CSSProperties, type JSX } from "react";

export interface LyRadioOption {
    id: string;
    name: string;
    icon?: JSX.Element;
}

export interface LyRadioInputProps {
    options: LyRadioOption[];
    value: string;
    style?: CSSProperties;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function LyRadioInput(props: LyRadioInputProps) {
    return (
        <div className="flex flex-col gap-3 exo-2-regular border p-2 rounded-lg border-slate-300 shadow-2xl">
            {props.options.map((option) => (
                <label
                    key={option.id}
                    className={`
            relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
            ${props.value === option.id
                            ? 'border-yellow-500 bg-yellow-50'
                            : 'border-gray-200 hover:border-gray-300 bg-white'}
          `}
                >
                    <input
                        type="radio"
                        value={option.id}
                        checked={props.value === option.id}
                        onChange={props.onChange}
                        style={props.style}
                        className="sr-only"
                    />

                    {
                        option.icon &&
                        <div className={`p-2 rounded-lg mr-4 ${props.value === option.id ? 'text-yellow-600' : 'text-gray-500'}`}>
                            {option.icon}
                        </div>
                    }


                    <div className="flex-1">
                        <p className="font-bold text-gray-900">{option.name}</p>
                    </div>

                    {/* Custom Checkmark Icon */}
                    {props.value === option.id && (
                        <CheckCircle2 className="text-yellow-500 animate-in zoom-in duration-200" size={24} />
                    )}
                </label>
            ))}
        </div>
    );
}