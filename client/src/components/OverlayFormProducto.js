import React from "react"
import ReactDOM from "react-dom"

export function OverlayFormProducto() {
    return ReactDOM.createPortal(
        <div className="overlay">
            <div className="cartel-enviado">
                <h1>¡Operación exitosa!</h1>
                <p>Producto creado</p>
            </div>
        </div>,
        document.getElementById("root")
    )
}