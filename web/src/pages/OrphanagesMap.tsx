import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'

export default function OrphanagesMap(): JSX.Element {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Manhuaçu</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
        center={[-20.260546, -42.0324309]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}