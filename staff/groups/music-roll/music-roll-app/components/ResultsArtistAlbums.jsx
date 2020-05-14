function ResultsArtistAlbums({artists}) {
    return <>
        {artists.length ? <ul>
            {
                artists.map(({ images, name, artistsArray }) => {
                    return <li> <img src={`${images}`}/> <h1>{`${name}`}</h1> <h2>{`${artistsArray}`}</h2></li>
                })
            }
        </ul> : console.error("fail")}
    </>
}