import { IoPhonePortrait, IoRocket, IoColorWandSharp, IoTrophySharp } from "react-icons/io5";

const cardStyle = {
    backgroundColor: "#baff29",
    backgroundImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
}

const textStyle = {
    backgroundColor: "transparent"
}

function Card({tittle, text, icon}) {
    return (
        <div className="col text-center rounded p-4" style={cardStyle}>
            <h1 className="fs-5 my-2" style={textStyle}>{tittle}</h1>
            {icon}
            <p className="my-2" style={textStyle}>
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
                        <Card tittle="Diseños increibles" text="Páginas con diseños creativos y atractivos" icon={[<IoColorWandSharp className="fs-2 my-3" style={textStyle} />]} />
                        <Card tittle="Web Responsive" text="Páginas adaptables a cualquier tipo de dispositivo" icon={[<IoPhonePortrait className="fs-2 my-3" style={textStyle} />]} />
                        <Card tittle="Rendimiento" text="Páginas de alto rendimiento para la satisfacción de los usuarios" icon={[<IoRocket className="fs-2 my-3" style={textStyle} />]} />
                        <Card tittle="SEO" text="Páginas optimizadas para el buen posicionamiento en buscadores" icon={[<IoTrophySharp className="fs-2 my-3" style={textStyle} />]} />
                </div>
            </div>
    )
}
     