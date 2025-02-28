import express from 'express';
const router = express.Router();

// Sample Review Route
router.get('/', (req, res) => {
    res.status(200).json({ message: "Review route working!" });
});

export default router;
