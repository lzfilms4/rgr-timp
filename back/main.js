const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const express = require('express');
const PORT = process.env.PORT || 5000;
const UserModel = require('./Users');
const cors = require('cors');
const axios = require('axios')
const uri ='mongodb+srv://lzfilms3:4321qwerr@sovkom-back.bvtv8wl.mongodb.net/?retryWrites=true&w=majority'
mongoose
  .connect(uri)
  .then(() => {
    console.log('DB ok');
  })
  .catch((err) => {
    console.log(err);
  });
const client = new MongoClient(uri);

const app = express();
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.post('/person/create', async (req, res) => {
  const mlResult = axios.get('https://flask-production-a780.up.railway.app/', {
    Age: req.body.age,
    BusinessTravel: req.body.BusinessTravel,
    DailyRate: req.body.DailyRate,
    Department: req.body.Department,
    Education: req.body.Education,
    EducationField: req.body.EducationField,
    Gender: req.body.Gender,
    HourlyRate: req.body.HourlyRate,
    JobInvolvement: req.body.JobInvolvement,
    JobLevel: req.body.JobLevel,
    MaritalStatus: req.body.MaritalStatus,
    MonthlyIncome: req.body.MonthlyIncome,
    NumCompaniesWorked: req.body.NumCompaniesWorked,
    OverTime: req.body.OverTime,
    StandardHours: req.body.StandardHours,
    TotalWorkingYears: req.body.TotalWorkingYears,
    YearsAtCompany: req.body.YearsAtCompany,
    YearsInCurrentRole: req.body.YearsInCurrentRole,
    YearsSinceLastPromotion: req.body.YearsSinceLastPromotion,
    YearsWithCurrManager: req.body.YearsWithCurrManager,
  });
  try {
    const doc = new UserModel({
      fullName: req.body.fullName,
      age: req.body.age,
      BusinessTravel: req.body.BusinessTravel,
      DailyRate: req.body.DailyRate,
      Department: req.body.Department,
      Education: req.body.Education,
      EducationField: req.body.EducationField,
      Gender: req.body.Gender,
      HourlyRate: req.body.HourlyRate,
      JobInvolvement: req.body.JobInvolvement,
      JobLevel: req.body.JobLevel,
      MaritalStatus: req.body.MaritalStatus,
      MonthlyIncome: req.body.MonthlyIncome,
      NumCompaniesWorked: req.body.NumCompaniesWorked,
      OverTime: req.body.OverTime,
      StandardHours: req.body.StandardHours,
      TotalWorkingYears: req.body.TotalWorkingYears,
      YearsAtCompany: req.body.YearsAtCompany,
      YearsInCurrentRole: req.body.YearsInCurrentRole,
      YearsSinceLastPromotion: req.body.YearsSinceLastPromotion,
      YearsWithCurrManager: req.body.YearsWithCurrManager,
      happiness: mlResult[0],
      mood: req.body.mood || [],
    });
    const person = await doc.save();
    res.json(person);
  } catch (err) {
    console.log(err);
  }
});
app.post('/person/addMood', async (req, res) => {
  await UserModel.findOneAndUpdate(
    {
      fullName: req.body.fullName,
    },
    {
      $push: { mood: req.body.mood },
    },
  )
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
});
app.post('/person/addTest', async (req, res) => {
  await UserModel.findOneAndUpdate(
    {
      fullName: req.body.fullName,
    },
    {
      $push: { tests: req.body.test },
    },
  )
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
});

app.get('/person/find', async (req, res) => {
  await UserModel.find({
    fullName: req.body.fullName,
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
});
app.get('/person/findall', async (req, res) => {
  await UserModel.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log('Server OK');
});
