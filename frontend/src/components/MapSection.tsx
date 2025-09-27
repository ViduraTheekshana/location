import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { FireStation } from "../types/FireStation";
import "leaflet/dist/leaflet.css";

interface MapSectionProps {
  stations: FireStation[];
}

export function MapSection({ stations }: MapSectionProps) {
  return (
    <div className="h-[500px] w-full mt-12">
      <MapContainer
        center={[7.8731, 80.7718]} // Centered on Sri Lanka
        zoom={7}
        scrollWheelZoom={false}
        className="h-full w-full rounded-lg shadow-lg"
      >
        {/* Background map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Fire station markers */}
        {stations.map((station) => (
          <Marker key={station.id} position={station.coordinates}>
            <Popup>
              <strong>{station.name}</strong>
              <br />
              {station.address}
              <br />
              📞 {station.phone}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
