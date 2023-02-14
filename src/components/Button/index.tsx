import './style.css'

interface ButtonProps {
    text: string
    size: string
}

export function Button({ text, size }: ButtonProps) {
    return (
        <div className="buttonArea">
            <a href="#planos" className={`button ${size}`}>
                {text}
            </a>
        </div>
    )
}