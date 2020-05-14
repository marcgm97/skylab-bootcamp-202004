const { useState, useEffect } = React

function AlbumResults({ results, token }) {
    const [albumTracks, setAlbumTracks] = useState(undefined);
    const [trackResults, setTrackResults] = useState(undefined);

    useEffect(() => {
        setAlbumTracks(undefined);
    }, [results]);

    function handleOnAlbum(id) {
        searchAlbumTracks(id, token, (error, resultsTracks) => {
            if (error) {
                console.log(error)
            }
            if (setAlbumTracks(resultsTracks)) {
                setTrackResults(results)
            }
        })
    }

    return <>
        {results.length ? <ul>j
            {
                results.map(({ name, id, artistsArray, image }) => {
                    return <li className="disc-list">
                        <h2 className="disc-list__title">{`${name}`}</h2><h1 className="disc-list__artist">{`${artistsArray.join()}`} </h1><a href="" onClick={(event) => {
                            event.preventDefault()
                            handleOnAlbum(id)
                        }}><img className="disc-list__image" src={image} /></a>
                    </li>
                })
            }
        </ul> : console.error("fail")}

        {albumTracks && <ResultsTracks albumTracks={albumTracks} />}
        {trackResults && <ResultsTracks trackResults={trackResults} />}
    </>
}
