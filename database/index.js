const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/listing');

const placeSchema = new mongoose.Schema({
  id: Number,
  url: String,
  title: String,
  city: String,
  state: String,
  country: String,
  plusVerified: Boolean,
  propertyType: String,
  price: Number,
  averageReview: Number,
  totalReviews: Number,
  savedList: [String],
  about: String,
  theSpace: String,
  neighborhood: String,
});

const Place = mongoose.model('Places', placeSchema);

const savedListSchema = new mongoose.Schema({
  name: String,
});

const SavedList = mongoose.model('SavedList', savedListSchema);

const listingSchema = new mongoose.Schema({
  listingID: Number,
  Rooms: [{
    roomID: Number,
    title: String,
    city: String,  
    avgRating: Number,
    TotalRating: Number,
    propertyType: String,
    plusVerified: String,
    price: Number,
    images: [
      {
        imgID: Number,
        imgURL: String
      },
      {
        imgID: Number,
        imgURL: String
      },
      {
        imgID: Number,
        imgURL: String
      }
    ]
  },
  {
    roomID: Number,
    title: String,
    city: String,  
    avgRating: Number,
    TotalRating: Number,
    propertyType: String,
    plusVerified: String,
    price: Number,
    images: [
      {
        imgID: Number,
        imgURL: String
      },
      {
        imgID: Number,
        imgURL: String
      },
      {
        imgID: Number,
        imgURL: String
      }
    ]
  },
  {
    roomID: Number,
    title: String,
    city: String,  
    avgRating: Number,
    TotalRating: Number,
    propertyType: String,
    plusVerified: String,
    price: Number,
    images: [
      {
        imgID: Number,
        imgURL: String
      },
      {
        imgID: Number,
        imgURL: String
      },
      {
        imgID: Number,
        imgURL: String
      }
    ]
  }]
}, {collection : 'listing'});

const Listings = mongoose.model('listing', listingSchema);

module.exports = {
  db,
  SavedList,
  Place,
  Listings,
};
