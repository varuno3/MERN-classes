const fs = require('fs');

let tours = fs.readFileSync('./files/tours.json', 'utf8');
tours = JSON.parse(tours);

module.exports.getAllTours = (req, res) => {
    res.json(tours);
}

module.exports.getTour = (req, res)=>{
    const id = parseInt(req.params.id);
    const tour = tours.find(tour => tour.id === id);
    if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
}

module.exports.addNewTour = (req, res) => {
    const newTour = req.body;
    const{name, price} = newTour;
    
    if(!name || !price){
        return res.status(400).json({message:'Missing name or price'})
    };
    newTour.id = tours[tours.length-1].id + 1;
    tours.push(newTour);
    fs.writeFile('./files/tours.json', JSON.stringify(tours), ()=>{});
    res.status(201).json(newTour);
}

  
module.exports.replaceTour = (req,res) =>{
    const id = parseInt(req.params.id);
    const updatedTour = req.body;
    const{name, price} = newTour;
    if(!name || !price){
        return res.status(400).json({message:'Missing name or price'})
    };
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Tour with given id is not found' });
    }
    updatedTour.id = id; 
    tours[index] = updatedTour;
   fs.writeFile('./files/tours.json', JSON.stringify(tours), ()=>{
        
    });
    res.json(updatedTour);
}

module.exports.updateTour = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const updates = req.body;
    console.log(req.body);
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Tour is not found' });
    }
    Object.assign(tours[index], updates);
    fs.writeFile('./files/tours.json', JSON.stringify(tours), ()=>{
        
    });
    res.json(tours[index]);
}

module.exports.deleteTour = (req, res) => {
    const id = parseInt(req.params.id);
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    tours.splice(index, 1);
    fs.writeFile('./files/tours.json', JSON.stringify(tours), ()=>{
        
    });
    res.sendStatus(204);
}