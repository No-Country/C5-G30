const router = express.Router();

//Students router
router.get('/students', studentController.getAll)
router.get('/:id', studentController.getById)

router.post('/students', studentController.signUp);
router.post('/students', studentController.logIn);

router.put('/students', studentController.updateStudent);
router.delete('/students', studentController.deleteStudent);

//Teachers Router
router.get('/teachers', teacherController.getAll)
router.get('/:teacherId', teacherController.getById)

router.post('/teachers', teacherController.signUp);
router.post('/teachers', teacherController.logIn);

router.put('/teachers', teacherController.updateTeacher);
router.delete('/teachers', teacherController.deleteTeacher);

//Classes Router
router.get('/classes', classesController.getAll)
router.get('/:classesId', classesController.getById)

router.post('/classes', classesController.signUp);
router.post('/classes', classesController.logIn);

router.put('/classes', classesController.updateClasses);
router.delete('/classes', classesController.deleteClasses);