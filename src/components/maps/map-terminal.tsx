
"use client"

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

// Reusable Map Marker Component
const MapTerminalContent = ({ 
  points = [], 
  center = [20.5937, 78.9629], // India Center
  zoom = 5 
}: { 
  points?: Array<{ lat: number, lng: number, title?: string, subtitle?: string }>,
  center?: [number, number],
  zoom?: number
}) => {
  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet')
  const L = require('leaflet')

  // Custom Icon for AZTEK Terminal Pins
  const terminalIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="width: 40px; height: 40px; background: #0066FF; border: 2px solid white; border-radius: 12px; display: flex; items-center; justify-content: center; box-shadow: 0 0 20px rgba(0,102,255,0.6);"><svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="currentColor"/></svg></div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="w-full h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((p, i) => (
        <Marker key={i} position={[p.lat, p.lng]} icon={terminalIcon}>
          <Popup className="aztek-map-popup">
            <div className="p-2 space-y-1 bg-black text-white rounded-lg min-w-[150px]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{p.title}</p>
              <p className="text-[9px] uppercase font-medium text-muted-foreground">{p.subtitle}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

// Dynamic import to handle SSR
const DynamicMap = dynamic(() => Promise.resolve(MapTerminalContent), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-white/5 animate-pulse rounded-[32px]">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Initializing Geo-Link...</p>
      </div>
    </div>
  )
})

export function MapTerminal(props: any) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  return <DynamicMap {...props} />
}
