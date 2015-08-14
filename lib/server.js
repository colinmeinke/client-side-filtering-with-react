import express from 'express';
import path from 'path';

const app = express();

app.get( '/app.js', ( req, res ) => {
  res.sendFile( path.join( __dirname, '..', 'dist/app.js' ));
});

app.get( '/filter.html', ( req, res ) => {
  res.sendFile( path.join( __dirname, '..', 'filter.html' ));
});

app.listen( 3000 );
