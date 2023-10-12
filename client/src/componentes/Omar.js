import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import logo from './logo/logo.png';
import Footer from './Footer';

const Omar = () => {

    const [museo, setMuseo] = useState({
        museo: "Museo Regional Omar Salazar Obando",
        tipo: "arqueológico",
        encargado:"UCR",
        imagen: "data:image/jpeg;base64,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",
        horario:"Lunes a sábado, de 8:00 a.m. a 5:00 p.m.",
        paginaweb:"https://www.sa.ucr.ac.cr/web/espanol-museo-omar-salazar/",
        lugar:"Provincia de Cartago, Turrialba",
        descripcion:"El Museo de Turrialba Omar Salazar fue creado el 10 de noviembre de 1995, ocupa un edificio declarado Patrimonio Histórico - Arquitectónico, el museo  pretende rescatar las raíces indígenas del cantón, cuenta con una exhibición arqueológica mostrando los modos de vida de las primeras poblaciones de Turrialba, con una magnifica colección de figuras en cerámica y líticas que incluye raspadores, buriles, cuchillos, etc.",
        lat:9.901428011485383,
        long:-83.67257476279167
    });
    const [showPopup, setShowPopup] = useState(true);

    const [viewState, setViewState] = React.useState({
        longitude: -84.09,
        latitude: 9.65,
        zoom: 6.1
    });

    return (
        <div>
            <div className='lista_actividades'>
                <div className="navbar navbar-expand-lg bg-dark p-1" data-bs-theme="dark">
                    <div className='nav_act'>
                        <img className='logo' src={logo} alt='logo' />
                        <h1>Museos</h1>
                        <ul className='link_actividades navbar-nav me-auto mb-2 mb-lg-0 ms-3 lista'>
                            <li className="nav-item">
                                <Link to="/museos" className="nav-link active">Regresar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='todo_museo'>
                <h1 className='nombre_museo'>{museo.museo}</h1>
                <div className='body_museo'>
                    <div className='informacionPrincipal'>
                        <div>
                            <img src={museo.imagen} alt='museo' className='museo_foto' />
                        </div>
                        <div className='museo_bottom'>
                            <p><span>Tipo:</span>{museo.tipo}</p>
                            <p><span>Encargado:</span>{museo.encargado}</p>
                            <p><span>Horario:</span>{museo.horario}</p>
                            <p><span>Página web:</span>{museo.paginaweb}</p>
                            <p><span>Ubicación:</span>{museo.lugar}</p>
                            <p><span>Descripción:</span><br></br>
                                {museo.descripcion}
                            </p>
                        </div>
                    </div>
                    <div className='informacionPrincipal'>
                        <div id='map'>
                            <Map
                                mapboxAccessToken='pk.eyJ1IjoibW9uaWNhbHVjaWExOTk0IiwiYSI6ImNsbmkwNHVvczFiODkybG1zcmFoMXQ1eHIifQ.X4HfG7hokZo_mNBg3Dxs3Q'
                                {...viewState}
                                onMove={evt => setViewState(evt.viewState)}
                                mapStyle="mapbox://styles/mapbox/streets-v9"
                                style={{ width: 400, height: 350 }}
                            >
                                <div id='marcador'>
                                    <Marker longitude={museo.long} latitude={museo.lat} offsetLeft={-20} offsetTop={-10}>
                                        <img src={PinImagen} style={{ fontSize: viewState.zoom * 5 }} />
                                    </Marker>
                                </div>
                                <div>
                                    {showPopup && (
                                        <Popup longitude={museo.long} latitude={museo.lat}
                                            anchor="left"
                                            onClose={() => setShowPopup(false)}>
                                            <div className='card tarjetaVer'>
                                                <label className='cardTitle tarjetaTitulo'>Museo: </label>
                                                <h4 className='cardDesc museo cuerpoCard'>{museo.museo}</h4>
                                                <label className='cardTitle tarjetaTitulo'>Horario: </label>
                                                <h4 className='cardDesc cuerpoCard'>{museo.horario}</h4>
                                                <label className='cardTitle tarjetaTitulo'>Tipo: </label>
                                                <h4 className='cardDesc cuerpoCard'>{museo.tipo}</h4>
                                            </div>
                                        </Popup>)}
                                </div>
                            </Map>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Omar;