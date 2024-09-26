import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export const AdminMap = () => {
    const locations = [
        { name: 'Manizales, Caldas', position: [5.0670, -75.5174] },
        { name: 'Cali, Valle del Cauca', position: [3.4516, -76.5319] },
        { name: 'Bogotá, Cundinamarca', position: [4.7110, -74.0721] },
        { name: 'Armenia, Quindío', position: [4.5339, -75.6811] }, 
        { name: 'Medellín, Antioquia', position: [6.2442, -75.5812] },
    ];

    const zoom = 6;
    const style = { height: "60vh", width: "50%" };

    return (
        <MapContainer center={[6.7110, -74.0721]} zoom={zoom} style={style}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location, idx) => (
                <Marker key={idx} position={location.position}>
                    <Popup>{location.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};