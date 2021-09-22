const express = require('express');
const app = express();

app.get('/' , (req,res) =>{
    res.json({
        hello: 'incio'
    } );
} );


// app.post('/' , (req,res) =>{
//     res.json({
//         hello: 'vista del post'
//     } );
// } );

// app.get('/user/:id' , (req,res) =>{
//   const userId = req.params.id;
//   const userAge = req.params.age;
//   const userRole = req.params.role;
//   console.log(userAge);
//   res.status(200).send(userRole);
// } );

app.listen(3000, () =>{
    console.log('servidor levantado en el puerto 3000')
} )

