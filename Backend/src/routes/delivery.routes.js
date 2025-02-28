import express from 'express';
const router = express.Router();

// Sample Delivery Route
router.get('/', (req, res) => {
    res.status(200).json({ message: "Delivery route working!" });
});

export default router;
