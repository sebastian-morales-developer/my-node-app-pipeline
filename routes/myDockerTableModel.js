const express = require('express');
const { myDockerTableModel } = require('../models');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const record = await myDockerTableModel.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ (All)
router.get('/', async (req, res) => {
  const records = await myDockerTableModel.findAll();
  res.json(records);
});

// READ (One)
router.get('/:id', async (req, res) => {
  const record = await myDockerTableModel.findByPk(req.params.id);
  record ? res.json(record) : res.status(404).json({ error: 'Not found' });
});

// UPDATE
router.put('/:id', async (req, res) => {
  const record = await myDockerTableModel.findByPk(req.params.id);
  record ? res.json(await record.update(req.body)) : res.status(404).json({ error: 'Not found' });
});

// DELETE
router.delete('/:id', async (req, res) => {
  const record = await myDockerTableModel.findByPk(req.params.id);
  record ? (await record.destroy(), res.json({ message: 'Deleted successfully' })) : res.status(404).json({ error: 'Not found' });
});

module.exports = router;
