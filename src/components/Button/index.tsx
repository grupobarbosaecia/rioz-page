import './style.css'

interface ButtonProps {
    text: string
    size: string
    alignment?: string
}

export function Button({ text, size, alignment }: ButtonProps) {
    return (
        <div className={`buttonArea ${alignment}`}>
            <a href="#planos" className={`button ${size}`}>
                {text}
            </a>
        </div>
    )
}