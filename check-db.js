const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://imawadh:nPDu4vVvV5H9PjmJ@cluster0.uldh5k4.mongodb.net/portfolio?appName=Cluster0";

const FreelanceProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  authorizedEmail: String,
});

const FreelanceProject = mongoose.models.FreelanceProject || mongoose.model('FreelanceProject', FreelanceProjectSchema);

async function check() {
  await mongoose.connect(MONGODB_URI);
  const projects = await FreelanceProject.find({});
  console.log("Projects in DB:", JSON.stringify(projects, null, 2));
  process.exit(0);
}
check();
