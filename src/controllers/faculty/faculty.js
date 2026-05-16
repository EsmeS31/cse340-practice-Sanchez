import {
    getFacultyById,
    getSortedFaculty
} from '../../models/faculty/faculty.js';

// Faculty list page
const facultyListPage = (req, res) => {

    const sortBy = req.query.sort;

    const faculty = getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty
    });
};

// Faculty detail page
const facultyDetailPage = (req, res, next) => {

    const facultyId = req.params.facultyId;

    const facultyMember = getFacultyById(facultyId);

    // handle invalid faculty id
    if (!facultyMember) {

        const err = new Error('Faculty member not found');
        err.status = 404;

        return next(err);
    }

    res.render('faculty/detail', {
        title: facultyMember.name,
        faculty: facultyMember
    });
};

export {
    facultyListPage,
    facultyDetailPage
};