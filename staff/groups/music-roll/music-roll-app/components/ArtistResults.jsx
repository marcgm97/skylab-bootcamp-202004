const { useState, useEffect } = React

function ArtistResults({ results, token }) {

    const [artists, setArtists] = useState(undefined);

    useEffect(() => {
        setArtists(undefined);
    }, [results]);

    function handleArtists (id) {
        searchArtistAlbum(id, token, (error, resultsAlbums) => {
            if (error) console.log(error)
            setArtists(resultsAlbums)   
        })    
    }

    return<>
        {results.length ? <ul>
            {
            results.map(({name, id, images}) => {
                return <li key={`${id}`}>{`${name}`} <a href="" onClick={(event) => {
                    event.preventDefault()
                    handleArtists(id)
                }}><img src={`${images}`} width="100px" height="100px"></img></a> href="" }</li>
            })
        }
        </ul> : console.error("fail")}
´
        {artists && <ResultsArtistAlbums artists={artists} />}
    </>
}