const states = require("../data/states");

// ─── Helper ──────────────────────────────────────────────────────────────────
const generateId = () =>
  states.length > 0 ? Math.max(...states.map((s) => s.id)) + 1 : 1;

// ─── GET /states ─────────────────────────────────────────────────────────────
const getAllStates = (req, res) => {
  res.status(200).json(states);
};

// ─── GET /states/highest-gdp ─────────────────────────────────────────────────
const getHighestGdp = (req, res) => {
  const state = states.reduce((max, s) => (s.gdp > max.gdp ? s : max), states[0]);
  res.status(200).json(state);
};

// ─── GET /states/:id ─────────────────────────────────────────────────────────
const getStateById = (req, res) => {
  const state = states.find((s) => s.id === parseInt(req.params.id));
  if (!state) return res.status(404).json({ message: "State not found" });
  res.status(200).json(state);
};

// ─── POST /states ─────────────────────────────────────────────────────────────
const createState = (req, res) => {
  const { name, population, literacyRate, annualBudget, gdp } = req.body;
  const newState = { id: generateId(), name, population, literacyRate, annualBudget, gdp };
  states.push(newState);
  res.status(201).json(newState);
};

// ─── PUT /states/:id ─────────────────────────────────────────────────────────
const replaceState = (req, res) => {
  const index = states.findIndex((s) => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "State not found" });

  const { name, population, literacyRate, annualBudget, gdp } = req.body;
  states[index] = { id: states[index].id, name, population, literacyRate, annualBudget, gdp };
  res.status(200).json(states[index]);
};

// ─── PUT /states/:id/budget ───────────────────────────────────────────────────
const replaceBudget = (req, res) => {
  const state = states.find((s) => s.id === parseInt(req.params.id));
  if (!state) return res.status(404).json({ message: "State not found" });

  state.annualBudget = req.body.annualBudget;
  res.status(200).json(state);
};

// ─── PUT /states/:id/population ──────────────────────────────────────────────
const replacePopulation = (req, res) => {
  const state = states.find((s) => s.id === parseInt(req.params.id));
  if (!state) return res.status(404).json({ message: "State not found" });

  state.population = req.body.population;
  res.status(200).json(state);
};

// ─── PATCH /states/:id/literacy ──────────────────────────────────────────────
const updateLiteracy = (req, res) => {
  const state = states.find((s) => s.id === parseInt(req.params.id));
  if (!state) return res.status(404).json({ message: "State not found" });

  state.literacyRate = req.body.literacyRate;
  res.status(200).json(state);
};

// ─── PATCH /states/:id/gdp ───────────────────────────────────────────────────
const updateGdp = (req, res) => {
  const state = states.find((s) => s.id === parseInt(req.params.id));
  if (!state) return res.status(404).json({ message: "State not found" });

  state.gdp = req.body.gdp;
  res.status(200).json(state);
};

// ─── PATCH /states/:id ───────────────────────────────────────────────────────
const partialUpdate = (req, res) => {
  const state = states.find((s) => s.id === parseInt(req.params.id));
  if (!state) return res.status(404).json({ message: "State not found" });

  Object.assign(state, req.body);
  res.status(200).json(state);
};

// ─── DELETE /states/:id ──────────────────────────────────────────────────────
const deleteById = (req, res) => {
  const index = states.findIndex((s) => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states.splice(index, 1);
  res.status(204).send();
};

// ─── DELETE /states/name/:stateName ──────────────────────────────────────────
const deleteByName = (req, res) => {
  const index = states.findIndex(
    (s) => s.name.toLowerCase() === req.params.stateName.toLowerCase()
  );
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states.splice(index, 1);
  res.status(204).send();
};

// ─── DELETE /states/low-literacy/:percentage ─────────────────────────────────
const deleteLowLiteracy = (req, res) => {
  const threshold = parseFloat(req.params.percentage);
  const before = states.length;

  const toKeep = states.filter((s) => s.literacyRate >= threshold);
  states.splice(0, states.length, ...toKeep); // mutate original array in-place

  res.status(200).json({ deletedCount: before - states.length });
};

module.exports = {
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
};