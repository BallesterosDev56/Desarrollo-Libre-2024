import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export const AdminMap = () => {
    const regions = [
        {
            name: 'Manizales, Caldas',
            center: [5.0670, -75.5174],
            range: 0.02,
            numberOfPoints: 6
        },
        {
            name: 'Cali, Valle del Cauca',
            center: [3.4516, -76.5319],
            range: 0.02,
            numberOfPoints: 10
        },
        {
            name: 'Bogotá, Cundinamarca',
            center: [4.7110, -74.0721],
            range: 0.03,
            numberOfPoints: 13
        },
        {
            name: 'Armenia, Quindío',
            center: [4.53389, -75.68111],
            range: 0.02,
            numberOfPoints: 6
        },
        {
            name: 'Medellín, Antioquia',
            center: [6.2442, -75.5812],
            range: 0.03,
            numberOfPoints: 10
        }
    ];

    const generateRandomPoints = (center, range, numberOfPoints) => {
        const points = [];
        for (let i = 0; i < numberOfPoints; i++) {
            const randomLat = center[0] + (Math.random() * 2 - 1) * range;
            const randomLng = center[1] + (Math.random() * 2 - 1) * range;
            points.push([randomLat, randomLng]);
        }
        return points;
    };
    const allPoints = regions.flatMap(region => generateRandomPoints(region.center, region.range, region.numberOfPoints));
    const zoom = 6;
    const style = { height: "60vh", width: "50%" };

    return (
        <MapContainer center={[4.53389, -75.68111]} zoom={zoom} style={style}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {allPoints.map((point, index) => (
            <Marker key={index} position={point}></Marker>
        ))}
    </MapContainer>
    );
};
