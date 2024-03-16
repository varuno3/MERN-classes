const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());


let tours = fs.readFileSync('./files/tours.json', 'utf8');
tours = JSON.parse(tours);


app.get('/tours', (req, res) => {
    res.json(tours);
});


app.get('/tours/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tour = tours.find(tour => tour.id === id);
    if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
});


app.post('/tours', (req, res) => {
    const newTour = req.body;
    newTour.id = tours.length;
    tours.push(newTour);
    fs.writeFile('./files/tours.json', JSON.stringify(tours), ()=>{

    });
    res.status(201).json(newTour);
});


app.put('/tours/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTour = req.body;
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    updatedTour.id = id; 
    tours[index] = updatedTour;
   fs.writeFile('./files/tours.json', JSON.stringify(tours), ()=>{
        
    });
    res.json(updatedTour);
});


app.patch('/tours/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    Object.assign(tours[index], updates);
    fs.writeFile('./files/tours.json', JSON.stringify(tours), ()=>{
        
    });
    res.json(tours[index]);
});


app.delete('/tours/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    tours.splice(index, 1);
    fs.writeFile('./files/tours.json', JSON.stringify(tours), ()=>{
        
    });
    res.sendStatus(204);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
