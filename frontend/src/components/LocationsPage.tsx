import React from 'react';
import { HeroSection } from './HeroSection';
import { StationList } from './StationList';
import { MapSection } from './MapSection';
import { fireStations } from '../data/fireStations';

export function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <StationList stations={fireStations} />
      <MapSection stations={fireStations} />
    </div>
  );
}
