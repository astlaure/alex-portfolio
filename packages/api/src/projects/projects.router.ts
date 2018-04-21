import express from 'express';

let router = express.Router();

router.route('/api/projects')
  .get((req, res) => {
    res.json({
      id: 0,
      name: 'test item'
    })
  });

export default router;
