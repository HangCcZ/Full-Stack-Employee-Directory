import dbConnect from '../../../lib/dbConnect'
import Employee from '../../../models/Employee'
import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

/**API endpoint for single employee
 * http://localhost:3000/api/employees/id/${id}
 */
export default async function handler(req, res) {
  await cors(req, res)
  const {
    query: { id }, // extra id in url query
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const employee = await Employee.findById(id) // find an employee by id
        console.log(employee)
        if (!employee) {
          res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: employee })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
          new: true, // return updated document instead of old
        })
        if (!updatedEmployee) {
          res.status(400).json({ success: false })
        }
        res.status(201).json({ success: true, data: updatedEmployee })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deletedEmployee = await Employee.findByIdAndDelete(id)
        if (!deletedEmployee) {
          return res.status(400).json({ success: false })
        }
        res.status(201).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
