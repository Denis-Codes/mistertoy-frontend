// import React, { useState } from 'react'
// import GoogleMapReact from 'google-map-react'
// import logoUrl from '../assets/img/toys-favicon.png'

// function Marker() {
//   return (
//     <div className="branch-img">
//       {/* <img src={logoUrl} /> */}
//        { <p>❤️</p> } 
//     </div>
//   )
// }

// const API_KEY = import.meta.env.GOOGLE_MAP_API || 'AIzaSyDSx5s19jkw6svS_7xvjnUlL6ntcNPBuEc'

// export function Map() {
//   const [coordinates, setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })
//   const [zoom, setZoom] = useState(8)

//   function handleClick({ lat, lng }) {
//     setCoordinates({ lat, lng })
//   }

//   const branches = [
//     {
//       city: 'Haifa',
//       id: 101,
//       position: {
//         lat: 32.820789,
//         lng: 34.963488,
//       },
//     },
//     {
//       city: 'Tel Aviv',
//       id: 102,
//       position: {
//         lat: 32.071035,
//         lng: 34.779118,
//       },
//     },
//     {
//       city: 'Jerusalem',
//       id: 103,
//       position: {
//         lat: 31.773362,
//         lng: 35.221193,
//       },
//     },
//   ]

//   return (
//     <div>
//       {branches.map(branch => {
//         return (
//           <button
//           key={branch.city}
//             onClick={() => {
//               setCoordinates(branch.position)
//               setZoom(12)
//             }}
//             >
//             {branch.city}
//           </button>
//         )
//       })}
      
//       <div className="map" style={{ height: '60vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: API_KEY }}
//           center={coordinates}
//           zoom={zoom}
//           onClick={handleClick}
//         >
//           {branches.map(branch => {
//             return (
//               <Marker
//                 lat={branch.position.lat}
//                 lng={branch.position.lng}
//                 key={branch.id}
//               />
//             )
//           })}
//         </GoogleMapReact>
//       </div>
//     </div>
//   )
// }

import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import logoUrl from '../assets/img/toys-favicon.png'

function Marker() {
  return (
    <div className="branch-img">
      {/* <img src={logoUrl} /> */}
      { <p>❤️</p> }
    </div>
  )
}

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API || 'AIzaSyDSx5s19jkw6svS_7xvjnUlL6ntcNPBuEc';

export function Map() {
  const [coordinates, setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })
  const [zoom, setZoom] = useState(8)

  function handleClick({ lat, lng }) {
    setCoordinates({ lat, lng })
  }

  const branches = [
    {
      city: 'Haifa',
      id: 101,
      position: {
        lat: 32.820789,
        lng: 34.963488,
      },
    },
    {
      city: 'Tel Aviv',
      id: 102,
      position: {
        lat: 32.071035,
        lng: 34.779118,
      },
    },
    {
      city: 'Jerusalem',
      id: 103,
      position: {
        lat: 31.773362,
        lng: 35.221193,
      },
    },
  ]

  return (
    <div>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} mb={2}>
        {branches.map(branch => (
          <Button
            key={branch.city}
            variant="contained"
            color="primary"
            onClick={() => {
              setCoordinates(branch.position)
              setZoom(12)
            }}
          >
            {branch.city}
          </Button>
        ))}
      </Box>
      
      <div className="map" style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          center={coordinates}
          zoom={zoom}
          onClick={handleClick}
        >
          {branches.map(branch => (
            <Marker
              lat={branch.position.lat}
              lng={branch.position.lng}
              key={branch.id}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  )
}
