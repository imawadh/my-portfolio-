import mongoose from 'mongoose';

const FreelanceProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a project title.'],
  },
  websiteUrl: {
    type: String,
    required: [true, 'Please provide a website URL.'],
  },
  githubUrl: {
    type: String,
    required: [true, 'Please provide a GitHub URL.'],
  },
  image: {
    type: String,
  },
  authorizedEmail: {
    type: String,
    required: [true, 'Please provide an authorized email.'],
    unique: true,
  },
  reviewText: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  isReviewed: {
    type: Boolean,
    default: false,
  },
  clientName: {
    type: String,
  },
  clientDesignation: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.FreelanceProject || mongoose.model('FreelanceProject', FreelanceProjectSchema);
