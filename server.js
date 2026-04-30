import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { WebSocketServer } from 'ws';

const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const WS_PORT = PORT + 1;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.locals.NODE_ENV = NODE_ENV.toLowerCase();
    next();
});

app.get('/', (req, res) => {
    res.render('home', { title: 'Welcome Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

app.get('/products', (req, res) => {
    res.render('products', { title: 'Our Products' });
});

if (NODE_ENV.includes('dev')) {
    const wss = new WebSocketServer({ port: WS_PORT });

    wss.on('connection', (socket) => {
        socket.on('error', (err) => {
            console.error('WebSocket error:', err);
        });
    });

    console.log(`WebSocket server running on ws://127.0.0.1:${WS_PORT}`);
}

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});