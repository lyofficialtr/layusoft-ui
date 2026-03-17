import { Check, ChevronDown, X } from "lucide-react";
import { useState, type CSSProperties, type JSX } from "react";

export interface LyMultiSelectOption {
    id: string;
    name: string;
    icon: JSX.Element;
}

export interface LyMultiSelectInputProps {
    options: LyMultiSelectOption[];
    value: LyMultiSelectOption[];
    style?: CSSProperties;
    onChange: (items: LyMultiSelectOption[]) => void;
    title?: string;
}

export function LyMultiSelectInput(props: LyMultiSelectInputProps) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOption = (option: LyMultiSelectOption) => {
        if (props.value.find(item => item.id === option.id)) {
            props.onChange(props.value.filter(item => item.id !== option.id));
        } else {
            props.onChange([...props.value, option]);
        }
    };

    const removeOption = (id: string) => {
        props.onChange(props.value.filter(item => item.id !== id));
    };

    return (
        <div className="relative exo-2-regular shadow-2xl">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="min-h-11 w-full flex items-center flex-wrap gap-2 p-4
                 bg-yellow-50 border border-gray-300 rounded-xl cursor-pointer
                  hover:border-yellow-500 transition-all focus-within:ring-2
                   focus-within:ring-yellow-100"
            >
                {props.value.length === 0 && (
                    <span className="text-gray-400 text-sm ml-1">{props.title ?? "Select ..."}</span>
                )}

                {/* Selected Pills */}
                {props.value.map((item) => (
                    <span
                        key={item.id}
                        className="flex items-center gap-1.5 bg-yellow-100 text-yellow-700
                         px-2 py-1 rounded-md text-xs font-bold animate-in zoom-in duration-150"
                    >
                        {item.icon}
                        {item.name}
                        <button
                            onClick={(e) => { e.stopPropagation(); removeOption(item.id); }}
                            className="hover:bg-yellow-200 rounded-full p-0.5"
                        >
                            <X size={12} />
                        </button>
                    </span>
                ))}

                <ChevronDown size={18} className={`ml-auto text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute z-20 w-full mt-2 bg-white border
                 border-gray-100 rounded-xl shadow-xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    {props.options.map((option) => {
                        const isSelected = props.value.find(item => item.id === option.id);
                        return (
                            <div
                                key={option.id}
                                onClick={() => toggleOption(option)}
                                className={`
                                flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors
                                ${isSelected ? 'bg-yellow-50 text-yellow-700 font-semibold' : 'hover:bg-gray-50 text-gray-600'}
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={isSelected ? 'text-yellow-500' : 'text-gray-400'}>{option.icon}</span>
                                    <span className="text-sm">{option.name}</span>
                                </div>
                                {isSelected && <Check size={16} className="text-yellow-600" />}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}