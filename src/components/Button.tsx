import {ReactElement} from "react"

interface ButtonProps{
    text: string;
    variant: "primary" | "secondary";
    startIcon?: ReactElement;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}


const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center"


export const Button = ({text, variant, startIcon}: ButtonProps) => {
    return <button className={variantStyles[variant] + " " + defaultStyles}>
            <div className="pr-2">
                {startIcon}
            </div>
            {text}
        </button>
}
