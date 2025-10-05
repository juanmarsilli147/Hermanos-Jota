import React from "react"
import ReactDOM from "react-dom"

export function OverlayForm() {
    return ReactDOM.createPortal(
        <div className="overlay">
            <div className="cartel-enviado">
                <h1>¡Muchas gracias!</h1>
                <p>Su mensaje se ha enviado exitosamente</p>
            </div>
        </div>,
        document.getElementById("root")
    )
}