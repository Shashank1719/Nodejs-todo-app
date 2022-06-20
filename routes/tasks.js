const express = require('express')
const router = express.Router();

const {getAllTask, createTask, updateTask, getSingleTask, deleteTask} = require('../Controllers/tasks');
router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);


// router.route('/').get((req,res)=>{
//     res.send('All Items are here');
// })

module.exports = router;