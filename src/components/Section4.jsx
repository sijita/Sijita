import { IoPhonePortrait, IoRocket, IoColorWandSharp, IoTrophySharp } from "react-icons/io5";

const cardStyle = {
    color: '#0f0f0f',
    backgroundColor: '#BAFF29',
}

function Card({tittle, text, icon}) {
    return (
        <div className="col text-center rounded p-4" style={cardStyle}>
            <h1 className="fs-5 my-2" style={cardStyle}>{tittle}</h1>
            {icon}
            <p className="my-2" style={cardStyle}>
                {text}
            </p>
        </div>
    );
}

export default function Section4() {
    return (
            <div className="container p-5">
                <h2 className="d-inline-block align-middle" style={{ color: '#f6fafd', overflow: 'hidden' }}>Servicios</h2>
                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 justify-content-evenly mx-auto mt-5 gap-5" style={{ overflow: 'hidden' }}>
                        <Card tittle="Diseños increibles" text="Páginas con diseños creativos y atractivos" icon={[<IoColorWandSharp className="fs-2 my-3" style={cardStyle} />]} />
                        <Card tittle="Web Responsive" text="Páginas adaptables a cualquier tipo de dispositivo" icon={[<IoPhonePortrait className="fs-2 my-3" style={cardStyle} />]} />
                        <Card tittle="Rendimiento" text="Páginas de alto rendimiento para la satisfacción de los usuarios" icon={[<IoRocket className="fs-2 my-3" style={cardStyle} />]} />
                        <Card tittle="SEO" text="Páginas optimizadas para el buen posicionamiento en buscadores" icon={[<IoTrophySharp className="fs-2 my-3" style={cardStyle} />]} />
                </div>
            </div>
    )
}
     