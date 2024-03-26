const { param } = require('../routes/tourRoutes');
const Tour = require('./../models/tourModel');

module.exports.getAllTours = async (req, res) => {
    try{
        // const tours = await Tour.find(); //If nothing is specified then this returns all the available data

        // const tours = await Tour
        //                 .find()
        //                 .where("difficulty")
        //                 .equals("easy")
        //                 .where("duration")
        //                 .lt(10)
        //                 .where("price")
        //                 .lt(2000)
        //                 .select("name")
        //                 .sort('-price')

        //the above stuff is hard coding
        
        res.status(200);
        res.json({
            status: 'success',
            body:{
                tours: tours
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}

module.exports.getTour = async(req, res) => {
    const { id: paramId } = req.params;
    try{
        const tour = await Tour.findOne({
            "_id": paramId
        }); //findOne({params},  {fields to show}).. use the params to search for a particular data matching the required params, fields to show will return the specified fields, will return all if undefined
        if(!tour) throw new Error("Invalid Tour Id");
        res.status(200);
        res.json({
            status: 'success',
            body:{
                tour: tour
            }
        });
    }
    catch(err){
        res.status(404);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}


module.exports.addNewTour = async (req, res) => {
    // const newTour = req.body;
    // const{name, price} = newTour;
    
    // if(!name || !price){
    //     return res.status(400).json({message:'Missing name or price'})
    // };
    // newTour.id = tours[tours.length-1].id + 1;
    // tours.push(newTour);
    // fs.writeFile('./files/tours.json', JSON.stringify(tours), ()=>{});
    // res.status(201).json(newTour);
    try{
        const newTour = await Tour.create(req.body); //this used to create a new document within that DB
        res.status(201);
        res.send({
            status: 'success',
            body:{
                tour: newTour
            }
        });
    }
    catch(err){
        console.log(err);
        res.status(422);
        res.send({
            status: 'fail',
            message:err.message,
        });
    }
}

  
module.exports.replaceTour = async (req,res) =>{
    const {id: paramId} = req.params;
    const {_id, __v, ...body} = req.body;
    try{
        const tour = await Tour.findOneAndReplace({"_id": paramId,}, body, {
            new: true,
        });
        if(!tour) throw new Error("Invalid Tour Id");
        res.status(201);
        res.json({
            status: 'success',
            body: tour
        });
    }
    catch(err){
        res.status(404);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }

}

module.exports.updateTour = async (req, res) => {
    const { id: paramId } = req.params;
    const {_id, __v, ...body} = req.body;
    try{
        const tour = await Tour.findOneAndUpdate({"_id": paramId,}, body, {
            new: true,
        });
        
        //How findoneandupdateworks:  It looks for the document in database where _id matches and updates it with the data provided in request
        // db.collection.findOneAndUpdate(
        //     { name: "John" }, // Filter
        //     { $set: { age: 35 } }, // Update
        //     { 
        //         returnOriginal: false // Return the updated document
        //     }
        // )
        //returns null if specified params are not  found in a document to update

        if(!tour) throw new Error("Invalid Tour Id");
        res.status(201);
        res.json({
            status: 'success',
            body: tour
        });
    }
    catch(err){
        res.status(404);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}

module.exports.deleteTour = async (req, res) => {
    const { id: paramId } = req.params;
    try{
        const tour = await Tour.findOneAndDelete({
            "_id": paramId
        });
        //How findoneanddeleteworks : it  will search for the object with given conditions and delete that object from database. If no objects is found it returns null
        if(!tour) throw new Error("Invalid Tour Id");
        res.status(204);
        res.json({
            status: 'success',
            body: null
        });
    }
    catch(err){
        res.status(404);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}