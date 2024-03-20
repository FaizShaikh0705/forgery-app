// server.js
const express = require('express');
const { spawn } = require('child_process');
const multer = require('multer');
const app = express();
const port = 3002;
const cors = require('cors');

// const userRoutes = require('./routes/userRoutes.js');
// const authRoutes = require('./routes/authRoutes.js')


// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/'); // Save uploaded files to the uploads directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original file name for the uploaded file
    }
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

// app.use('/api/auth', authRoutes)
// app.use('/api/users', userRoutes)

app.post('/process-image', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;

    const pythonProcess = spawn('python3', ['pancard.py', imagePath]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        res.send(data.toString());
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).send('Error processing image');
    });
});

app.post('/process-images', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;

    const pythonProcess = spawn('python3', ['aadhar.py', imagePath]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        res.send(data.toString());
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).send('Error processing image');
    });
});

app.post('/process-img', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;

    const pythonProcess = spawn('python3', ['XImarksheet.py', imagePath]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        res.send(data.toString());
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).send('Error processing image');
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
