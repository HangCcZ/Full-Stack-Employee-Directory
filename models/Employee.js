import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    pictureUrl: String,
    title: String,
    department: String,
    location: String,
  },
  { timestamps: true }
)

export default mongoose.models.Employee ||
  mongoose.model('Employee', EmployeeSchema)
