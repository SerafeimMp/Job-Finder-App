import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {
    
    }); 
  });

app.get("/add",(req,res)=>{
    res.render("add.ejs",{

    });
});
app.post("/add",(req,res)=>{
    const candidate = new Candidate(req.body.Name,req.body.Age,req.body.City,req.body.DrivingLicense,req.body.Phone,req.body.Email,req.body.YearsExpr);
    //candidate.setJobInt(req.body.JobInt);
    const resultJ = req.body.JobInt.split(",");
    resultJ.forEach(element => {
    candidate.setJobInt(element);
   });
   console.log(candidate.getJobInt()+" Job getter");
    const result = req.body.Skills.split(",");
    result.forEach(element => {
    candidate.setSkills(element);
   });
   console.log(candidate.getSkills()+" Skills getter");
   
   res.redirect("/");
});
app.get("/addJobs",(req,res)=>{
    res.render("addJobs.ejs",{

    });
});
app.post("/addJobs",(req,res)=>{
    const job = new Job(req.body.Name,req.body.yExprerience,req.body.drivingLic,req.body.description,req.body.date,req.body.activated,req.body.email,req.body.phone);
   
    const resultJ = req.body.JobInt.split(",");
    resultJ.forEach(element => {
    job.setJob(element);
   });
   console.log(job.getJob()+" Job getter");
    const result = req.body.Requirements.split(",");
    result.forEach(element => {
    job.setRequirements(element);
   });
   console.log(job.getRequirements()+" Requirements getter");
   
    res.redirect("/");
});

class Candidate {
    constructor(name , age , city , drivingLic, phoneNum , email , yExprerience ){
        this.name =name;
        this.age = age;
        this.city = city;
        this.drivingLic = drivingLic;
        this.phoneNum = phoneNum;
        this.email = email;
        this.jobInt=[];
        this.yExprerience = yExprerience;
        this.skills = [];

    }
    hello(){
       console.log(`My name is   ${this.name} and I live in ${this.city} , I am ${this.age} y.o ` ) 
    }
    getSkills(){
        return this.skills;
    }
    setSkills(skills){
        this.skills.push(skills);   
    }
    getJobInt(){
       return this.jobInt;
    }
    setJobInt(jobInt){
        this.jobInt.push(jobInt);
    }
}

class Job {
    constructor (name,yExprerience,drivingLic,description,date,activated,email,phone,){
        this.name = name;
        this.yExprerience=yExprerience;
        this.drivingLic=drivingLic;
        this.jobInt=[];
        this.description=description;
        this.date=date;
        this.activated=activated;
        this.requirements = [];
        this.email=email;
        this.phone=phone;
    }

    getRequirements(){
        return this.requirements;
    }
    setRequirements(requirement){
        this.requirements.push(requirement);
    }
    getJob(){
        return this.jobInt;
     }
     setJob(jobInt){
         this.jobInt.push(jobInt);
     }
}



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  