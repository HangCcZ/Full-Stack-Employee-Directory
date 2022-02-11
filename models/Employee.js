import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
  name: String,
  emailAddress: String,
  pictures: String,
  jobTitle: String,
  department: String,
  location: String,
})
