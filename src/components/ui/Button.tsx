
interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onclick: () => void;
}

export const Button = (props: ButtonProps) => {
    return <button></button>
}

<Button variant="primary" size="md" onclick={() => {}} text={"asd"} />