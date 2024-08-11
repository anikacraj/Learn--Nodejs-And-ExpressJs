const path = require("path");
const multer = require("multer");

// Handle the GET request
exports.getHome = (req, res) => {
    const filePath = path.join(__dirname, '../views/index.html');
    res.sendFile(filePath);
};

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);
    },
});

// Initialize multer with the defined storage
const upload = multer({ storage: storage });

// Handle the POST request
exports.postHome = [
    upload.single("image"),
    (req, res) => {
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }
        res.status(200).send("File is uploaded");
    }
];
