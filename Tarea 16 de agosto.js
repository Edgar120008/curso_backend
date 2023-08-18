const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Middleware personalizado para registrar solicitudes
app.use((req, res, next) => {
    console.log(`Solicitud recibida en ${new Date()}`);
    next();
});

// Middleware personalizado para autenticación básica
const auth = (req, res, next) => {
    const palabra = req.headers.authorization;

    if (palabra === 'llave') {
        next(); // Continúa si el valor de la palabra es el correcto
    } else {
        res.status(401).json({ error: 'El valor de la palabra no es correcto' });
    }
};

// Middleware personalizado para ruta /ruta/palabra
app.get('/ruta/palabra', auth, (req, res) => {
    res.json({ mensaje: 'Se ingresó con éxito a la ruta /ruta/palabra' });
});

// Middleware personalizado para ruta /otra/ruta
const otroMiddleware = (req, res, next) => {
    console.log('Otro middleware se ejecutó');
    next();
};

app.get('/otra/ruta', otroMiddleware, (req, res) => {
    res.json({ mensaje: 'Se ingresó con éxito a la ruta /otra/ruta' });
});

// Middleware personalizado con contenido y ruta diferente
const miMiddleware = (contenido) => {
    return (req, res, next) => {
        console.log(contenido);
        next();
    };
};

app.get('/mi/ruta', miMiddleware('Este es un mensaje de miMiddleware'), (req, res) => {
    res.json({ mensaje: 'Se ingresó con éxito a la ruta /mi/ruta' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
