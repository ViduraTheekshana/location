import React from 'react';
import { LocationCard } from './LocationCard';
import type { FireStation } from '../types/FireStation';

interface StationListProps {
  stations: FireStation[];
}

export function StationList({ stations }: StationListProps) {
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#1E2A38]">
        Fire Stations Directory
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stations.map((station) => (
          <LocationCard key={station.id} station={station} />
        ))}
      </div>
    </div>
  );
}
