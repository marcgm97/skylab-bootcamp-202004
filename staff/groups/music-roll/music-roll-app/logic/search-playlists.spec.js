describe('search-playlist', () => {
    let query;
    let token;

    it('should throw an error when token its wrong', done => {
        
        query = "chill beats"
 
        searchPlaylists("1234", query, (error, results) => {
         
            expect(results).to.be.undefined
            expect(error).to.exist
            
            done()
        })
    })


    it('should fail when token its not a string', () => {
        query = 'hola'
        
        expect(()=>{
            searchPlaylists(12, query, function(){})
        }).to.throw(TypeError, '12 is not a string')
        
        expect(()=>{
            searchPlaylists(null, query, function(){})
        }).to.throw(TypeError, 'null is not a string')

        expect(()=>{
            searchPlaylists(()=>{}, query, function(){})
        }).to.throw(TypeError, '()=>{} is not a string')

        expect(()=>{
            searchPlaylists(true, query, function(){})
        }).to.throw(TypeError, 'true is not a string')
        
        expect(()=>{
            searchPlaylists(NaN, query, function(){})
        }).to.throw(TypeError, 'NaN is not a string')

        expect(()=>{
            searchPlaylists({}, query, function(){})
        }).to.throw(TypeError, '[object Object] is not a string')

        expect(()=>{
            searchPlaylists(undefined, query, function(){})
        }).to.throw(Error, 'undefined is not a string')
    });
    
    
    it('should fail when query its not a string', () => {
        token = 'hola'
        
        expect(()=>{
            searchPlaylists(token, 12, function(){})
        }).to.throw(TypeError, '12 is not a string')
        
        expect(()=>{
            searchPlaylists(token, null, function(){})
        }).to.throw(TypeError, 'null is not a string')

        expect(()=>{
            searchPlaylists(token, ()=>{}, function(){})
        }).to.throw(TypeError, '()=>{} is not a string')

        expect(()=>{
            searchPlaylists(token, true, function(){})
        }).to.throw(TypeError, 'true is not a string')
        
        expect(()=>{
            searchPlaylists(token, NaN, function(){})
        }).to.throw(TypeError, 'NaN is not a string')

        expect(()=>{
            searchPlaylists(token, {}, function(){})
        }).to.throw(TypeError, '[object Object] is not a string')

        expect(()=>{
            searchPlaylists(token, undefined, function(){})
        }).to.throw(Error, 'undefined is not a string')
    })
        

    it('should fail when function its not a function', () => {
        token = 'hola'
        query = 'hola'
        
        expect(()=>{
            searchPlaylists(token, query, 12)
        }).to.throw(TypeError, '12 is not a function')
        
        expect(()=>{
            searchPlaylists(token, query, null)
        }).to.throw(TypeError, 'null is not a function')

        expect(()=>{
            searchPlaylists(token, query, 'hola')
        }).to.throw(TypeError, 'hola is not a function')

        expect(()=>{
            searchPlaylists(token, query, true)
        }).to.throw(TypeError, 'true is not a function')
        
        expect(()=>{
            searchPlaylists(token, query, NaN)
        }).to.throw(TypeError, 'NaN is not a function')

        expect(()=>{
            searchPlaylists(token, query, {})
        }).to.throw(TypeError, '[object Object] is not a function')

        expect(()=>{
            searchPlaylists(token, query, undefined)
        }).to.throw(Error, 'undefined is not a function')
    })
})