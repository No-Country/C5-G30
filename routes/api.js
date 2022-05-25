const express = require("express");
const router = express.Router();
const classesRoutes = require("./classesRoutes");
const tasksRoutes = require("./tasksRoutes");
const studentsRoutes = require("./studentsRoutes");

router.use("/classes", classesRoutes);
router.use("/tasks", tasksRoutes);
router.use("/students", studentsRoutes);

module.exports = router;
