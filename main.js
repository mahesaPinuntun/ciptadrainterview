const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Daftar MIME types untuk memastikan browser membaca file dengan benar
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Jika user mengakses root ('/'), arahkan ke index.html
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    
    // Ambil ekstensi file dari URL request
    let extname = String(path.extname(filePath)).toLowerCase();
    let contentType = MIME_TYPES[extname] || 'application/octet-stream';

    // Membaca dan menyajikan file dari folder public
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File tidak ditemukan (404)
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Halaman Tidak Ditemukan</h1>', 'utf-8');
            } else {
                // Error server internal (500)
                res.writeHead(500);
                res.end(`Maaf, terjadi kesalahan pada server: ${err.code}`);
            }
        } else {
            // Berhasil menyajikan file (200 OK)
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server Node.js murni berjalan di http://localhost:${PORT}`);
});