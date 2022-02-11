import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema(
  {
    name: String,
    emailAddress: String,
    picture_url: String,
    jobTitle: String,
    department: String,
    location: String,
  },
  { timestamps: true }
)

export default mongoose.models.Employee ||
  mongoose.model('Employee', EmployeeSchema)
