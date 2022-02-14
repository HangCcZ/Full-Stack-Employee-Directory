# Solution for Postlight Code Challenge - by Hang Chen

## Technologies and libraries used:

- Next.js (Frontend and API)
- MongoDB and Mongoose (Database)
- Figma (App layout planning)
- TailWindCSS (Styling)
- React Hook Form (Form entries handling and validation)
- Playwright (Testing)
- Postman (Backend API testing)
- SWR (Client side fetching and caching)
- Cloudinary (Image storage and upload)

## Todo and Completed

- [x] Create general API endpoints: **/api/employees** and **/api/employees/id**
- [x] Test general API endpoints: **/api/employees** and **/api/employees/id**
- [x] Setup MongoDB database connectivity and Mongoose
- [ ] Server side pagination
- [x] Frontend layout based on Figma file
- [ ] Implement search for employees
- [ ] Implement data grouping(sorting) by department, title, location
- [x] Form for employee creation
- [ ] Form for employee update
- [ ] Modal for employee deletion
- [ ] Testing on Frontend
- [ ] More testing on Backend, specifically pagination
- [ ] Animation?

## Setup Instructions:

## Notes on how I built the application:

### After reading the instructions, I know that I would need the following:

#### Backend:

- **API**: I decided to use the API feature in Next.js to build the backend to avoid hosting a dedicated backend. I do not have much experience with this API feature but wanted to try it out.
- **Database**: I decided to use MongoDB and Mongoose since I had great experience using this particular combination in the past and they are great for rapid prototyping like this.
- **Pagination**: I initially thought about client-side pagination but thought it might not be scalable, what if the sample company became the top company and hired 100,000 employee someday. As a result, I decided to go with servr-side pagination. It's new to me but I wanted to try it out.
- **Setup the API and MongoDB / Mongoose**: Pretty straight forward, I looked up an [example](<(https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/pages/api/pets/index.js)>) from Next.js's repository and tweaked a little bit to fit this challenge.
- **/api/employees/** API endpoints that handle GET, POST requests and pagination based on query string. I thought about client side pagination but it is not really scalable
- **/api/employees/[id]** API endpoint that handle GET, PUT and DELETE request on single entity

#### Frontend:

- **Framework**: I chose Next.js because I'm currently learning it and wanted to practice a little bit more. It also fits the company's stack
- **Styling**: Tailwind CSS for all the styling. I thought it was really cool when I first heard about it and has been a big fan of it since then.
- **Layout & UI**: It is easier to code user interface based on a actual layout and I decided to design a simple [interface](https://www.figma.com/file/QtY5OKXeMUcxx1cH1uZFhj/Employee-Directory---Postlight?node-id=0%3A1) using Figma.
- Based on the interface designed above, I broke down the app into following components:
  - 'SearchBar',
  - 'EmployeeList/EmployeeTable' (I found a component that acheive 99% of I was planning on [TailwindUI](https://tailwindui.com/components/application-ui/lists/tables))
  - 'EmployeeItem',
  - 'EditButton' in 'EmployeeItem', 'MoreButton' in 'EmployeeItem',
  - 'PaginationGroup',
  - 'PageButton' in 'PaginationGroup', 'PrevButton' and 'NextButton' in PaginationGroup
- **Forms**: Two forms are needed for create and edit functionalies. I used React Hook Forms to perform POST and PUT.
- Use Clouindary to handle the image uploading process in employee profile creation
- Need a notification/popup to show the results of create/delete/update

## Resources created:

- [Frontend Layout using Figma](https://www.figma.com/file/QtY5OKXeMUcxx1cH1uZFhj/Employee-Directory---Postlight?node-id=0%3A1)

## References and very useful resources:

- [EmployeeTable Component](https://tailwindui.com/components/application-ui/lists/tables)
- [Upload Images to Cloudinary in React & Next.js](https://www.youtube.com/watch?v=7lhUsK-FxYI&ab_channel=ColbyFayock)
- [Next.JS with MongoDB and Mongoose](https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/pages/api/pets/index.js)
- [Server Side Pagination - Node.JS/MongoDb](https://www.bezkoder.com/node-js-mongodb-pagination/)
- [Modal](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular)
