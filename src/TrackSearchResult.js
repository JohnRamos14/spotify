import React from 'react'

export default function TrackSearchResult({track}) {
  return (
    <div className="d-flex m-2 align-items-center" style={{cursor: "pointer"}}>
        <img src={track.alubumUrl} alt="..." style={{height: "64px", width: "64px"}} />
        <div className="ml-5">
            <div style={{marginLeft: "30px"}}>{track.title}</div>
            <div className="text-muted" style={{marginLeft: "30px"}}>{track.artist}</div>
        </div>
    </div>
  )
}
