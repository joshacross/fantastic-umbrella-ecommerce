const router = require('express').Router();
const apiRoutes = require('./api');
const productRoutes = require('./product-routes');
const tagRoutes = require('.tag-routes');
const categoryRoutes = require('./category-routes');

router.use('/api', apiRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/category', categoryRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;