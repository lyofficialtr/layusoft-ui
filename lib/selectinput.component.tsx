import { Check, ChevronDown } from "lucide-react";
import { useState, type CSSProperties, type JSX } from "react";

export interface LySelectOption {
    id: string;
    name: string;
    icon: JSX.Element;
}

export interface LySelectInputProps {
    options: LySelectOption[];
    value: LySelectOption;
    style?: CSSProperties;
    onChange: (item: LySelectOption) => void;
}

export function LySelectInput(props: LySelectInputProps) {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="relative shadow-2xl">
            {/* The "Trigger" Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4
                 bg-yellow-50 border border-gray-300 rounded-xl shadow-sm
                  hover:border-yellow-500 transition-all focus:ring-2 focus:ring-yellow-100"
            >
                <div className="flex items-center gap-3 text-gray-700">
                    {
                        props.value &&
                        <span className="text-yellow-500">{props.value.icon}</span>
                    }
                    <span className="font-medium">{props.value.name}</span>
                </div>
                <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* The Dropdown Menu */}
            {isOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border
                 border-gray-100 rounded-xl shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                    {props.options.map((option) => (
                        <div
                            key={option.id}
                            onClick={() => {
                                props.onChange(option);
                                setIsOpen(false);
                            }}
                            className={`
                flex items-center justify-between px-4 py-3 cursor-pointer transition-colors
                ${props.value.id === option.id ? 'bg-yellow-50 text-yellow-700' : 'hover:bg-gray-50 text-gray-600'}
              `}
                        >
                            <div className="flex items-center gap-3">
                                {props.value ? option.icon : null}
                                <span className="text-sm font-medium">{option.name}</span>
                            </div>
                            {props.value.id === option.id && <Check size={16} className="text-yellow-600" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}