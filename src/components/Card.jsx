import NodeIcon from "./NodeIcon";
import "./Card.css"
import { useEffect, useState } from "react";

function Titulo({children}) {
    return <p  className="card__titulo">{children}</p>
}

function Status({ativo}) {
    let statusTxt = '';
    const cssProps = {
        color: ativo ? 'lime' : 'red',
    }
    if (ativo) {
        statusTxt = 'Ativo';
    }
    else {
        statusTxt = 'Inativo';
    }

    return (<span style={cssProps} className="card__status">{statusTxt}</span>);
}

function Data() {
    const data = new Date();
    return(
        <p className="card__data">{data.toLocaleString()}</p>
    )
}

export default function Card(props) {
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        setInterval(() => {
            fetch(`http://localhost:4545/${props.id}`)
                .then(response => response.json())
                .then(data => {
                    setAtivo(data.ativo);
                })
                .catch(error => console.error('Error fetching data:', error));
        }, 5000);
    }, []);


    return (
            <div className="card" onClick={() => {console.log('clicado'); setAtivo(!ativo)}}>
             <NodeIcon ativo={ativo}></NodeIcon>
                <div className="card__textual">
                    <Titulo ativo={ativo}>Computador {props.id}</Titulo>
                    <Status ativo={ativo}></Status>
                    <Data></Data>
                </div>
            </div>
        );
};
