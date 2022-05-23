import mongoose from 'mongoose';

const database = mongoose.connect(DB_URI)
    .then(db => console.log('DB connected'))
    .catch(error => console.error(error.array))