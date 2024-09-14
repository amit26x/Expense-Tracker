const mongoos = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoos.connect('mongodb+srv://amit123:Amit12345@cluster0.kzk98.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB