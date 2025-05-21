import NodeIcon from "./NodeIcon";
import "./Card.css"
import { useState } from "react";

function Titulo({children}) {
    return <p className="card__titulo">{children}</p>
}

function Status({ativo, inativo, danificado}) {
    let statusTxt = '';
    if (ativo) {
        statusTxt = 'Ativo';
    }
    else if (inativo) {
        statusTxt = 'Inativo';
    }
    else if (danificado) {
        statusTxt = 'Danificado';
    }
    return (<span className="card__status">{statusTxt}</span>);
}

function Data() {
    const data = new Date();
    return(
        <p className="card__data">{data.toLocaleString()}</p>
    )
}

export default function Card(props) {
    return (
            <div className="card">
             <NodeIcon {...props}></NodeIcon>
                <div className="card__textual">
                    <Titulo>Computador {props.id}</Titulo>
                    <Status {...props} ></Status>
                    <Data></Data>
                </div>
            </div>
        );
};
