const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // Mongodb Connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex:true
        });

        console.log(`MongoDB connected:${con.connection.host}`);
    } catch (error) {
        console.log(err);
        process.exit(1);
        
    }
}
module.exports = connectDB;
