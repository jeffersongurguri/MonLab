import { Laptop as Icone } from "react-bootstrap-icons";
import './NodeIcon.css'

export default function NodeIcon({ativo, inativo, danificado}) {
    let statusTxt = '';
    if (ativo) {
        statusTxt = 'lime';
    }
    else if (inativo) {
        statusTxt = 'white';
    }
    else if (danificado) {
        statusTxt = 'red';
    }
    return (
        <Icone className='node' size={80} color={statusTxt}></Icone>
    )
}