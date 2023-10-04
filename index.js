const express = require('express');
const app = express();
const sequelize = require('./database/db');
const userRoutes = require('./routes/userRoute');
// Configurar la conexión a la base de datos
sequelize.authenticate()
 .then(() => console.log('Conexión establecida con la base de datos'))
 .catch(error => console.error('Error al conectar con la base de datos:', error));
// Configurar las rutas de la API
app.use(express.json())
app.use('/api', userRoutes);
// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));