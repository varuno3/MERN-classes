const express = require('express');
const tourRouter = require('./routes/tourRoutes');

const app = express();
app.use(express.json());

app.use('/tours',tourRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
