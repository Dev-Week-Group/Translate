const express = require( 'express' ),
      path    = require( 'path' ),
      serveStatic = require( 'serve-static' ),
      app     = express();

app.use(serveStatic(path.join(__dirname ) ) );
app.get( '*', ( req, res ) => {
    res.sendFile(path.join(__dirname, './index.html'));
})
app.listen( 9000, () => {
    console.log( 'starting' );
})
