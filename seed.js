const mongoose = require('mongoose');

// Define Schema here since it's a standalone script
const FreelanceProjectSchema = new mongoose.Schema({
  title: String,
  websiteUrl: String,
  githubUrl: String,
  image: String,
  authorizedEmail: String,
  reviewText: String,
  clientDesignation: String,
  rating: Number,
  isReviewed: Boolean,
  clientName: String,
  date: { type: Date, default: Date.now },
});

const FreelanceProject = mongoose.models.FreelanceProject || mongoose.model('FreelanceProject', FreelanceProjectSchema);

async function seed() {
  const MONGODB_URI = "mongodb+srv://imawadh:nPDu4vVvV5H9PjmJ@cluster0.uldh5k4.mongodb.net/portfolio?appName=Cluster0";
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing
    await FreelanceProject.deleteMany({});

    const sampleProjects = [
      {
        title: "The SRS Classes",
        websiteUrl: "https://thesrsclasses.com",
        githubUrl: "https://github.com/imawadh/srs-classes-fullstack",
        image: "/srs-preview.png",
        authorizedEmail: "awadhkishorsingh241@gmail.com", // Set to your email for easy testing
        isReviewed: false,
        reviewText: "",
        rating: 5,
        clientName: "",
        clientDesignation: "",
      }
    ];

    await FreelanceProject.insertMany(sampleProjects);
    console.log("Database updated with SRS Classes project only!");
    
    process.exit(0);
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
}

seed();
