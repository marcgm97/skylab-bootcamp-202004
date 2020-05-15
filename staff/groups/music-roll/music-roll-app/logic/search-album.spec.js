describe("search-album", () => {
    it("should find a track with the given query", (done) => {
      let token ="BQCIVFpHk2RhRbf45HgUw5olpSXb2jE2IRyLXzylnpvSf4azaX7mnNsZ4nQ6btAQf8cPyTvKZ-2B98c0FHwknIktdE5oyF_P-tLWXQkswdXg_xnJFUoIg1x6hQ2134dVBSQ_E5pbzOmhZyDpYuyRBfdCd1BRqOinZpOEOC8_xcOeYgF31tM55S3uV-EL";
      let query = "yo minoria absoluta";
      
      searchAlbum(token, query, (error, results) => {
        expect(error).to.be.undefined;
  
        expect(results).to.exist;
        expect(results).to.be.an("array");
        expect(results.length).to.be.greaterThan(0);
  
        results.forEach((result) => {
            debugger
          expect(result).to.be.an("object");
          expect(result.name).to.exist;
          expect(result.name).to.be.a("string");
          expect(result.artistsArray).to.exist; 
          expect(result.artistsArray).to.be.a("array");
          expect(result.artistsArray.length).to.be.greaterThan(0)
          expect(result.id).to.exist;
          expect(result.id).to.be.a("string");
          expect(result.image).to.be.a("string")
          expect(result.image).to.exist 
        });
        done();
      });
    });
     
     it("should throw an error when token its wrong", (done) => {
      query = "chill beats";
      token = '456'
      searchAlbum(token, query, (error, results) => {
        debugger;
        expect(results).to.undefined;
        expect(error).to.exist;
        expect(error).to.be.an.instanceOf(Error)
  
        done();
      });
    }); 
  
   
  
    it('should fail when token its not a string', () => {
          let query = 'hola'
          
           expect(()=>{
               searchAlbum(12, query, function(){})
           }).to.throw(Error, '12 is not a string')
          
           expect(()=>{
               searchAlbum(null, query, function(){})
           }).to.throw(Error, 'null is not a string')
  
           expect(()=>{
               searchAlbum(()=>{}, query, function(){})
           }).to.throw(Error, '()=>{} is not a string')
  
           expect(()=>{
               searchAlbum(true, query, function(){})
           }).to.throw(Error, 'true is not a string')
          
           expect(()=>{
               searchAlbum(NaN, query, function(){})
           }).to.throw(Error, 'NaN is not a string')
  
           expect(()=>{
               searchAlbum({}, query, function(){})
           }).to.throw(Error, '[object Object] is not a string')
  
           expect(()=>{
               searchAlbum(undefined, query, function(){})
           }).to.throw(Error, 'undefined is not a string')
          })
      
      
          it('should fail when query its not a string', () => {
              let token = 'hola'
              
               expect(()=>{
                   searchAlbum(token, 12, function(){})
               }).to.throw(Error, '12 is not a string')
              
               expect(()=>{
                   searchAlbum(token, null, function(){})
               }).to.throw(Error, 'null is not a string')
      
               expect(()=>{
                   searchAlbum(token, ()=>{}, function(){})
               }).to.throw(Error, '()=>{} is not a string')
      
               expect(()=>{
                   searchAlbum(token, true, function(){})
               }).to.throw(Error, 'true is not a string')
              
               expect(()=>{
                   searchAlbum(token, NaN, function(){})
               }).to.throw(Error, 'NaN is not a string')
      
               expect(()=>{
                   searchAlbum(token, {}, function(){})
               }).to.throw(Error, '[object Object] is not a string')
      
               expect(()=>{
                   searchAlbum(token, undefined, function(){})
               }).to.throw(Error, 'undefined is not a string')
              })
          
  
              it('should fail when function its not a function', () => {
                  let token = 'hola'
                  let query = 'hola'
                   
                  expect(()=>{
                       searchAlbum(token, query, 12)
                   }).to.throw(Error, '12 is not a function')
                  
                   expect(()=>{
                       searchAlbum(token, query, null)
                   }).to.throw(Error, 'null is not a function')
          
                   expect(()=>{
                       searchAlbum(token, query, 'hola')
                   }).to.throw(Error, 'hola is not a function')
          
                   expect(()=>{
                       searchAlbum(token, query, true)
                   }).to.throw(Error, 'true is not a function')
                  
                   expect(()=>{
                       searchAlbum(token, query, NaN)
                   }).to.throw(Error, 'NaN is not a function')
          
                   expect(()=>{
                       searchAlbum(token, query, {})
                   }).to.throw(Error, '[object Object] is not a function')
          
                   expect(()=>{
                       searchAlbum(token, query, undefined)
                   }).to.throw(Error, 'undefined is not a function')
                  }) 
   
  })
  
   