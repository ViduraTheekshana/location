import React from 'react';
import { MapPinIcon, PhoneIcon } from 'lucide-react';
import type { FireStation } from '../types/FireStation';

interface LocationCardProps {
  station: FireStation;
}

export function LocationCard({ station }: LocationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-[#C62828] text-xl font-bold mb-3">{station.name}</h3>
      <div className="flex items-start mb-2 text-gray-700">
        <MapPinIcon className="h-5 w-5 mr-2 text-[#C62828]" />
        <span>{station.address}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <PhoneIcon className="h-5 w-5 mr-2 text-[#C62828]" />
        <span>{station.phone}</span>
      </div>
    </div>
  );
}
