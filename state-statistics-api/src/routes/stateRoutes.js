const express = require("express");
const router = express.Router();
const {
  getAllStates,
  getHighestGdp,
  getStateById,
  createState,
  replaceState,
  replaceBudget,
  replacePopulation,
  updateLiteracy,
  updateGdp,
  partialUpdate,
  deleteById,
  deleteByName,
  deleteLowLiteracy,
} = require("../controllers/stateController");

// ── GET ───────────────────────────────────────────────────────────────────────
router.get("/",            getAllStates);
router.get("/highest-gdp", getHighestGdp);  // ⚠️ must be BEFORE /:id
router.get("/:id",         getStateById);

// ── POST ──────────────────────────────────────────────────────────────────────
router.post("/", createState);

// ── PUT ───────────────────────────────────────────────────────────────────────
router.put("/:id",            replaceState);
router.put("/:id/budget",     replaceBudget);
router.put("/:id/population", replacePopulation);

// ── PATCH ─────────────────────────────────────────────────────────────────────
router.patch("/:id",          partialUpdate);
router.patch("/:id/literacy", updateLiteracy);
router.patch("/:id/gdp",      updateGdp);

// ── DELETE ────────────────────────────────────────────────────────────────────
router.delete("/name/:stateName",          deleteByName);       // ⚠️ before /:id
router.delete("/low-literacy/:percentage", deleteLowLiteracy);  // ⚠️ before /:id
router.delete("/:id",                      deleteById);

module.exports = router;