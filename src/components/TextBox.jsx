import { useState } from "react"

function TextBox() {
    const [bgcolor, setBgColor] = useState('indigo')
    return (
        <div>
            <article title="parrafo principal"
                style={{ backgroundColor: bgcolor }}>
                Lorem ipsum dolor sit amet.
            </article>
            <button onClick={() => setBgColor(bgcolor === 'indigo' ? 'tomato' : 'indigo')}>
                Pulsa para modificar
            </button>
        </div>
    )
}

export default TextBox