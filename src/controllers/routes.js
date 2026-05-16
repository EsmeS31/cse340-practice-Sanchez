import express from 'express';

const router = express.Router();

// EXISTING imports
import { homePage } from './controllers/index.js';

// NEW faculty imports
import {
    facultyListPage,
    facultyDetailPage
} from './controllers/faculty/faculty.js';


// existing routes
router.get('/', homePage);


// NEW faculty routes
router.get('/faculty', facultyListPage);

router.get('/faculty/:facultyId', facultyDetailPage);


// export router
export default router;