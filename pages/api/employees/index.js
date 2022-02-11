/** Reference
 * https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/pages/api/pets/index.js
 */

import dbConnect from '../../../lib/dbConnect'
import Employee from '../../../models/Employee'

export default async function handler(req, res) {
  const { method } = req

  let some = await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const employees = await Employee.find({}) // find all employees from database
        console.log(employees)
        res.status(200).json({ success: true, data: employees })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const employee = await Employee.create(
          req.body
        ) /* create a new model in the database from request */
        res.status(201).json({ success: true, data: employee })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'Put':
      /**TODO: Add PUT request handler here */
      try {
      } catch (error) {}
      break
    case 'DELETE':
      /**TODO: Add DELETE request handler here */
      try {
      } catch (error) {}
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
