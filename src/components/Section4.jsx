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

export default function Section4({tittle, titulo1, titulo2, titulo3, titulo4, texto1, texto2, texto3, texto4}) {
    return (
            <div className="container p-5">
                <h2 className="d-inline-block align-middle" style={{ color: '#f6fafd', overflow: 'hidden' }}>{tittle}</h2>
                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 justify-content-evenly mx-auto mt-5 gap-5" style={{ overflow: 'hidden' }}>
                        <Card tittle={titulo1} text={texto1} icon={[<IoColorWandSharp className="fs-2 my-3" style={textStyle} />]} />
                        <Card tittle={titulo2} text={texto2} icon={[<IoPhonePortrait className="fs-2 my-3" style={textStyle} />]} />
                        <Card tittle={titulo3} text={texto3} icon={[<IoRocket className="fs-2 my-3" style={textStyle} />]} />
                        <Card tittle={titulo4} text={texto4} icon={[<IoTrophySharp className="fs-2 my-3" style={textStyle} />]} />
                </div>
            </div>
    )
}
     