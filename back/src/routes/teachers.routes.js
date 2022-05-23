router.get('/', teacherController.getAll)
router.get('/:teacherId', teacherController.getById)

router.post('/', teacherController.signUp);
router.post('/', teacherController.logIn);

router.put('/', teacherController.updateTeacher);
router.delete('/', teacherController.deleteTeacher);