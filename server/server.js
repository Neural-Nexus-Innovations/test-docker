import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors()); // Allow Next.js to call this from the browser if needed

app.get('/api/data', (req, res) => {
    res.json({ 
        message: "Hello from the Express API!", 
        timestamp: new Date().toISOString(),
        vps_status: "Healthy" 
    });
});

app.listen(8003, '0.0.0.0', () => console.log('API running on port 8003'));
