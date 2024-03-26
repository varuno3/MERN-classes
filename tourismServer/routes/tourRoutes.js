const express = require('express');
const tourController = require('./../controllers/tourController');
const tourRouter = express.Router(tourController);

tourRouter
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.addNewTour);


tourRouter
    .route("/:id")
    .get(tourController.getTour)
    .put(tourController.replaceTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports  = tourRouter;