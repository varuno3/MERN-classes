const app = require('./app');
const mongoose  = require('mongoose');


DATABASE_URL = "mongodb+srv://varunbadoni987:<password>@cluster0.sxnzdr8.mongodb.net/Test1?retryWrites=true&w=majority&appName=Cluster0";
DATABASE_PASSWORD = "sqvVu0svBVrpx64S";

const dbUrl = DATABASE_URL.replace('<password>', DATABASE_PASSWORD);
mongoose.connect(dbUrl).then((con)=>{
    console.log('-----------------Connection Established--------------')
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
