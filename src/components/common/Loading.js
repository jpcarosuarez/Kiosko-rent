import {Spinner} from 'react-bootstrap';
import './Loading.css';

export default function Loading(){
    return (
        <div className="divParent">
            <div className="divChild">
                <p>Aguarde un momento.. Cargando datos..</p>
                <Spinner animation="border" />
            </div>
        </div>
    )
}