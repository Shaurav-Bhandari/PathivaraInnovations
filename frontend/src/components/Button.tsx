import { ReactNode } from "react";

interface ButtonProps {
    id?: string;
    title: string;
    leftIcon?: ReactNode;
    containerClass?: string;
    rightIcon?: ReactNode;
}
export const Button = (props:ButtonProps) => {
    const { id, title, leftIcon, containerClass, rightIcon } = props;
    return (
        <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
            {leftIcon}

            <span className={`relative inline-flex overflow-hidden font-general text-xs uppercase`}>
                <div>
                    {title}
                </div>
            </span>
            {rightIcon}
        </button>
        // <div id={id} className={containerClass}>
        //     {leftIcon && leftIcon}
        //     {title}
        // </div>
    );
};