router.get('/students', studentController.getAll)
router.get('/:id', studentController.getById)

router.post('/students', studentController.signUp);
router.post('/students', studentController.logIn);

router.put('/students', studentController.updateStudent);
router.delete('/students', studentController.deleteStudent);