import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import logo from './logo/logo.png';
import Footer from './Footer';

const Santamaria = () => {

    const [museo, setMuseo] = useState({
        museo: "Museo Histórico Cultural Juan Santamaría",
        tipo: "histórico",
        encargado:"Ministerio de Cultura y Juventud",
        imagen: "data:image/jpeg;base64,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",
        horario:"Martes a domingo, de 10:00 a.m. a 6:00 p.m. Lunes cerrado//Sábados, de 8:00 a.m. a 3:00 p.m.//Domingos, de 10:00 a.m. a 4:00 p.m",
        paginaweb:"https://museojuansantamaria.go.cr/",
        lugar:"Av. 1, Provincia de Alajuela, Alajuela",
        descripcion:"Es la Institución creada para la recuperación, custodia, conservación y divulgación del patrimonio histórico de la guerra contra los filibusteros de 1856- 1857 para mantenerla vigente en la memoria colectiva de los costarricenses, por medio de diversas manifestaciones culturales y a la vez promover el desarrollo cultural alajuelense con fines educativos y de deleite. Entre sus fines está la Exhibición del patrimonio histórico artístico y cultural, tanto en los temas de la gesta heroica de 1856-1857, como en la historia costarricense en general. Divulgación del quehacer histórico educativo, artístico y cultural. Difusión de las investigaciones y estudios relacionados con la guerra centroamericana contra los filibusteros y, con la cultura alajuelense. ",
        lat:10.017356373424361,
        long:-84.21430114744791
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

export default Santamaria;