import express from 'express';
const router = express.Router();

// Sample Admin Route
router.get('/', (req, res) => {
    res.status(200).json({ message: "Admin route working!" });
});

export default router;
