// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const passport=require("passport")
const session=require("express-session")
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001; // Step 1
require("./passport/local-auth")

const routes = require('./routes/api');
const materiaRoutes=require('./routes/materiaRoutes')
const teacherRoutes=require('./routes/teacherRoutes')
const classesRoutes=require('./routes/classesRoutes')
//const studentsRoutes=require('./routes/studentsRoutes')
const tasksRoutes=require('./routes/tasksRoutes')
const cohorteRoutes=require('./routes/cohorteRoutes')
const studentsRoutes=require('./routes/studentsRoutes')
const loginRoutes=require('./routes/loginRoutes')

//ajustes para que se le brinde permisos al frontend d que pueda intercambiar
//reques con el backend por medio del uso de rutas
//Solicitud desde otro origen bloqueada: la política de mismo origen impide leer el recurso remoto en http://mi_servidor/ 
//se debe instalar CORS
const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
}
}

app.use(cors(
  config.application.cors.server
));


mongoose.connect("mongodb+srv://AulaVirtual2022:nocountryvirtual@aulavirtual.9kdbn.mongodb.net/test" || 'mongodb://localhost/mern_youtube', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:"secretSession",
    resave:false,
    saveUninitialized:false 
}))
app.use(passport.initialize()) //lo ejecutamos como middleware(inicializamos passport)
app.use(passport.session()) 
// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);
app.use('/api', teacherRoutes);
app.use('/api', classesRoutes);
app.use('/stu', studentsRoutes);
app.use('/api', tasksRoutes);
app.use('/mat', materiaRoutes);
app.use('/coho', cohorteRoutes);
app.use('/lo', loginRoutes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));