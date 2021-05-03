const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTagsData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allTagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const allTagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!allTagsData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(allTagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const allTagsData = await Tag.create({
      product_id: req.body.product_id,
    });
    res.status(200).json(allTagsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const allTagsData = await Tag.update({
      where: {
        id: req.params.id,
      },
    });

    if (!allTagsData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(allTagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const allTagsData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!allTagsData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(allTagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
