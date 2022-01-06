const router = require("express").Router();
const todoRoutes = require("./api/apiRoutes");
// API Routes
router.use("/api/", todoRoutes);

module.exports = router;