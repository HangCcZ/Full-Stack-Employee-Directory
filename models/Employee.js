import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const EmployeeSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    pictureUrl: String,
    title: String,
    department: String,
    location: String,
  },
  { timestamps: true }
)
EmployeeSchema.plugin(mongoosePaginate)

export default mongoose.models.Employee ||
  mongoose.model('Employee', EmployeeSchema)
