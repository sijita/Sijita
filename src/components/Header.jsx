
export function Header({logo, nombre, titulo1, titulo2, titulo3, barra}) {
    return (
        <header className="d-flex flex-column align-items-center justify-content-center vh-100" style={{ overflow: "hidden" }}>
            <div className="text-center">
                {logo}
                {nombre}
                <br/><br/>
                {titulo1}
            </div>
            <div className="d-flex">
                {titulo2}
                {barra}
                {titulo3}
            </div>
        </header>
    )
}
   