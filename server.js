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

// Test route for 500 errors
app.get('/test-error', (req, res, next) => {
    const err = new Error('This is a test error');
    err.status = 500;
    next(err);
});

    // Catch-all route for 404 errors
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// Global error handler
app.use((err, req, res, next) => {
    // Prevent infinite loops, if a response has already been sent, do nothing
    if (res.headersSent || res.finished) {
        return next(err);
    }

    // Determine status and template
    const status = err.status || 500;
    const template = status === 404 ? '404' : '500';

    // Prepare data for the template
    const context = {
        title: status === 404 ? 'Page Not Found' : 'Server Error',
        error: NODE_ENV === 'production' ? 'An error occurred' : err.message,
        stack: NODE_ENV === 'production' ? null : err.stack,
        NODE_ENV // Our WebSocket check needs this and its convenient to pass along
    };

    // Render the appropriate error template with fallback
    try {
        res.status(status).render(`errors/${template}`, context);
    } catch (renderErr) {
        // If rendering fails, send a simple error page instead
        if (!res.headersSent) {
            res.status(status).send(`<h1>Error ${status}</h1><p>An error occurred.</p>`);
        }
    }
});
    console.log(`WebSocket server running on ws://127.0.0.1:${WS_PORT}`);
}

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});