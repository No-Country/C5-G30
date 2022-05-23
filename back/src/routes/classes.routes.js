router.get('/', classesController.getAll)
router.get('/:classesId', classesController.getById)

router.post('/', classesController.signUp);
router.post('/', classesController.logIn);

router.put('/', classesController.updateClasses);
router.delete('/', classesController.deleteClasses);

