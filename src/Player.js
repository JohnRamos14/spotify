import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'


export default function Player(accessToken, trackUri) {
    // if (!accessToken) return null
  return <SpotifyPlayer
  token={accessToken}
  showSaveIcon
  //alway expect an array to be passed in
  uris={trackUri ? [trackUri] : []}
  />
}
