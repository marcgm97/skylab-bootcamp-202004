describe("searchArtistgreatesthits", () => {debugger
    let id;
    const VALID_QUERIES = ["extremoduro", "platero y tu", "los suaves"];
    const queryUrl = encodeURI(VALID_QUERIES.random()).concat(`&type=artist&offset=0&limit=1`);
    let token ="BQAgVv_DvbfAHMrsh0xl-EXS7-6Oo1l_OUkaEvonzucoRFtH2fxBLEmXH2NwIb-1SybFQqV_RUFK5H-7ZAPWnCb5GdbSXNbShcvAk0MlBKxJRFzvt9gLbm1LaSUe4wY4O1e6-AelvQ0MvnNFipRWPOmCQ1mwAIZ9QYCC-T1dNGJEFA4YDXxXJMMtOpVF";
    beforeEach((done) => {

    call("GET", `https://api.spotify.com/v1/search?q=${queryUrl}`,
      undefined,
      { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      (error, status, body) => {
        if (error) return done(new Error(error.message));

        if (status === 200) {debugger
          const { artists : {items} } = JSON.parse(body);

          id = items[0].id;
          done();
        }
      }
    );
  });

it('should find  artist greatest-hits by id', done => {
   
    searchArtistGreatestHits(`${id}`,`${token}`, (error,results) => {
  
      expect(error).to.be.undefined;
      expect(results).to.be.an("array")
      expect(results).to.exist
      expect(results.length).to.be.greaterThan(0)

      results.forEach((result) => {
        expect(result).to.be.an('object')
        expect(result.name).to.exist
        expect(result.name).to.be.a("string")
      })
    done()
    })
})

 it('should throw an error if id its not correct', done=>{
  searchArtistGreatestHits('asdasdasdasd',`${token}`, (error,results) => {
    expect(error).to.exist
    expect(results).to.be.undefined
    expect(error).to.be.an.instanceOf(Error)
     expect(error.message).to.equal('invalid id') 
  done()
  })
})

it('should throw an error if token its not correct', done=>{
  searchAlbumTracks(`${id}`,'adasdadas341231', (error,results) => {
    expect(error).to.exist
    expect(results).to.be.undefined
    expect(error).to.be.an.instanceOf(Error)
     expect(error.message).to.equal('Invalid access token') 
  done()
  })
})

it('should fail when id its not a string', () => {
   token = `${token}`
  
   expect(()=>{
       searchAlbum(12, token, function(){})
   }).to.throw(TypeError, '12 is not a string')
  
   expect(()=>{
       searchAlbum(null, token, function(){})
   }).to.throw(TypeError, 'null is not a string')

   expect(()=>{
       searchAlbum(()=>{}, token, function(){})
   }).to.throw(TypeError, '()=>{} is not a string')

   expect(()=>{
       searchAlbum(true, token, function(){})
   }).to.throw(TypeError, 'true is not a string')
  
   expect(()=>{
       searchAlbum(NaN, token, function(){})
   }).to.throw(TypeError, 'NaN is not a string')

   expect(()=>{
       searchAlbum({}, token, function(){})
   }).to.throw(TypeError, '[object Object] is not a string')

   expect(()=>{
       searchAlbum(undefined, token, function(){})
   }).to.throw(Error, 'undefined is not a string')
  })


  it('should fail when token its not a string', () => {
       id = `${id}`
      
       expect(()=>{
           searchAlbum(id, 12, function(){})
       }).to.throw(TypeError, '12 is not a string')
      
       expect(()=>{
           searchAlbum(id, null, function(){})
       }).to.throw(TypeError, 'null is not a string')

       expect(()=>{
           searchAlbum(id, ()=>{}, function(){})
       }).to.throw(TypeError, '()=>{} is not a string')

       expect(()=>{
           searchAlbum(id, true, function(){})
       }).to.throw(TypeError, 'true is not a string')
      
       expect(()=>{
           searchAlbum(id, NaN, function(){})
       }).to.throw(TypeError, 'NaN is not a string')

       expect(()=>{
           searchAlbum(id, {}, function(){})
       }).to.throw(TypeError, '[object Object] is not a string')

       expect(()=>{
           searchAlbum(id, undefined, function(){})
       }).to.throw(Error, 'undefined is not a string')
      })
      it('should fail when function its not a function', () => {
         token = 'hola'
         query = 'hola'
         
        expect(()=>{
             searchAlbum(token, query, 12)
         }).to.throw(TypeError, '12 is not a function')
        
         expect(()=>{
             searchAlbum(token, query, null)
         }).to.throw(TypeError, 'null is not a function')

         expect(()=>{
             searchAlbum(token, query, 'hola')
         }).to.throw(TypeError, 'hola is not a function')

         expect(()=>{
             searchAlbum(token, query, true)
         }).to.throw(TypeError, 'true is not a function')
        
         expect(()=>{
             searchAlbum(token, query, NaN)
         }).to.throw(TypeError, 'NaN is not a function')

         expect(()=>{
             searchAlbum(token, query, {})
         }).to.throw(TypeError, '[object Object] is not a function')

         expect(()=>{
             searchAlbum(token, query, undefined)
         }).to.throw(Error, 'undefined is not a function')
        }) 
    })