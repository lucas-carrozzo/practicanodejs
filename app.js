const express = require('express');
const app = express();

app.get('/' , (req,res) =>{
    res.json({
        hello: 'incio'
    } );
} );


app.post('/' , (req,res) =>{
    res.json({
        hello: 'vista del post'
    } );
} );

app.listen(3000, () =>{
    console.log('servidor levantado en el puerto 3000')
} )

