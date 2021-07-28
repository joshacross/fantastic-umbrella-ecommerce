const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: 
      {
        model: Product
      }
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },

    attributes: ['id', 'tag_name'],
    include: 
    {
      model: Product
    }
  })
  .then(dbTagData => {
    res.json(dbTagData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

  // create a new tag

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then((dbTagData) => {
    res.json(dbTagData)
  })
  .catch(dbTagData => {
    res.status(500).json(err);
  });
});

// Upate Tag by its 'id' value
router.put('/:id', (req, res) => {
    Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No Tag Found With This ID'});
        return;
      }
      res.json(dbTagData)
    })
    .catch(dbTagData => {
      res.status(500).json(err)
    });
  });


    // delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No Tag Found With This ID'});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

module.exports = router;
