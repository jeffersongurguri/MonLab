import { Laptop as Icone } from "react-bootstrap-icons";
import './NodeIcon.css'

export default function NodeIcon({ativo}) {
    let statusTxt = '';
    if (ativo) {
        statusTxt = 'lime';
    }
    else {
        statusTxt = 'red';
    }
    
    return (
        <Icone className='node' size={80} color={statusTxt}></Icone>
    )
}