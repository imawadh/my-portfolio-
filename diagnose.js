const mongoose = require('mongoose');
const fs = require('fs');
const MONGODB_URI = "mongodb+srv://imawadh:nPDu4vVvV5H9PjmJ@cluster0.uldh5k4.mongodb.net/portfolio?appName=Cluster0";

async function diagnose() {
  try {
    await mongoose.connect(MONGODB_URI);
    const db = mongoose.connection.db;
    
    const freelanceData = await db.collection('freelanceprojects').find({}).toArray();
    const result = {
      collections: (await db.listCollections().toArray()).map(c => c.name),
      freelanceprojects: freelanceData,
      timestamp: new Date().toISOString()
    };
    
    fs.writeFileSync('diagnostic_result.json', JSON.stringify(result, null, 2));
    console.log("Diagnostic result saved to diagnostic_result.json");
    process.exit(0);
  } catch (err) {
    fs.writeFileSync('diagnostic_result.json', JSON.stringify({ error: err.message }, null, 2));
    process.exit(1);
  }
}
diagnose();
