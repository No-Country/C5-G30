const TeacherSchema = new Schema({
    firstName: {},
    lastName: {},
    email: {},
    password: {},
    image: {},
    roleId: {},
    classesId: {
        [

    ]},
});

module.exports = mongoose.model('teachers', TeacherSchema);