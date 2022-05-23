const StudentSchema = new Schema({
    firstName: {},
    lastName: {},
    email: {},
    password: {},
    image: {},
    roleId: {},
    classesId: {
        [ 
        
    ]}
});

export default mongoose.model('students', StudentSchema);