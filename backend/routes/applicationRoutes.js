const express =require('express');
const router =express.Router();
const controller =require('../controllers/applicationController');

router.get('/', controller.getApplications);
router.post('/', controller.addApplication);
router.put('/:id', controller.updateApplication);
router.delete('/:id', controller.deleteApplication);

module.exports = router;
