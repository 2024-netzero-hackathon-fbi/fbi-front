import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk"
import NavigationBar from "./NavigationBar";

export default function ItemMap() {
  const [center, setCenter] = useState({
    lat: 33.450701,
    lng: 126.570667,
  })

  const [position, setPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCenter({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    })

    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    })
  }, [])

  return (
    <div>
      <Map // 지도를 표시할 Container
      center={center}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={3} // 지도의 확대 레벨
    >
      <MapMarker
        position={position}
        image={{
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
          size: {
            width: 24,
            height: 35
          }
        }}
      />
    </Map>
    <NavigationBar></NavigationBar>
    </div>
  )
}