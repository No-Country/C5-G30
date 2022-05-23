import { } from "./classes.routes";
import { } from "./students.routes";
import { } from "./teachers.routes";

const router = express.Router();

//Students router
router.use('/students', students.routes);

//Teachers Router
router.use('/teachers', teacher.routes);

//Classes Router
router.use('/classes', classes.routes);