import dbConnect from '../../../lib/dbConnect'
import Employee from '../../../models/Employee'

const getPagination = (page, size) => {
  const limit = size ? +size : 5
  const offset = page ? page * limit : 0
  return { limit, offset }
}

export default async function handler(req, res) {
  const { method } = req
  //title option can be add for searching later
  const { page, size } = req.query
  const { limit, offset } = getPagination(page - 1, size)
  console.log(limit, offset)
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const result = await Employee.paginate({}, { limit, offset }) // find all employees from database
        const { docs: employees } = result
        console.log(employees)
        const metaData = {
          totalEmployees: result.totalDocs,
          totalPages: result.totalPages,
          hasPrevPage: result.hasPrevPage,
          hasNextPage: result.hasNextPage,
          prevPage: result.prevPage,
          nextPage: result.nextPage,
          currentPage: result.page,
        }
        console.log(metaData.currentPage)
        res.status(200).json({ success: true, data: employees, metaData })
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
