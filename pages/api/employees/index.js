/** Reference
 * https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/pages/api/pets/index.js
 */

import dbConnect from '../../../lib/dbConnect'
import Employee from '../../../models/Employee'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const employees = await Employee.find({}) // find all employees from database
        res.status(200).json({ success: true, data: employees })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const newEmployee = await Employee.create(
          req.body
        ) /* create a new model in the database from request */
        res.status(201).json({ success: true, data: newEmployee })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
