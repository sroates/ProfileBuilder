const express = require("express");
const cors = require("cors");


const PORT = process.env.PORT || 8503;

const app = express();
app.use(cors());
app.use(express.json());

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://sroates:Nator805@cluster0.bfribxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function insertApplicant(data) {
      await client.connect();
      const result = await client.db("CMSC335_DB").collection("campApplicants").insertOne(data);
    //   console.log("New applicant added with ID:", result.insertedId);
  }

  async function findApplicantByEmail(email) {
    await client.connect();
    const result = await client.db("CMSC335_DB").collection("campApplicants").findOne({ email });
    // console.log(result); 
    return result; 
  }

app.post("/confirmApp", async (req, res) => {
    try {
        const { name, email, age, interests } = req.body;
        await insertApplicant(req.body);
        
        // Respond with JSON to be consumed by the React frontend
        res.json({ success: true, message: "Application submitted successfully!", applicant: { name, email, age, interests } });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error submitting application", error: error.message });
    }
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/profileFound", async (req, res) => {

  console.log(req.body);
  const {email} = req.body;
  // console.log(email); 
  let applicant = await findApplicantByEmail(email)
  console.log("hello", applicant)
  let name = "";
  let age = " ";
  let interests = " "; 

  if(applicant !== null){
      ({name, age, interests } = applicant);
  }
  else {
      name = "Unknown";
      gpa = "N/A";
      background = "No information available.";
  }

  res.json({ success: true,  applicant: { name, email, age, interests } });
});