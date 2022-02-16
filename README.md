# Solution for Postlight Code Challenge - by Hang Chen

## Checkout deployed version [here](https://code-challenge-for-postlight.vercel.app)

## Technologies and libraries used:

- Next.js (Frontend and API)
- MongoDB and Mongoose (Database)
- Figma (App layout planning)
- TailWindCSS (Styling)
- React Hook Form (Form entries handling and validation)
- Playwright (Testing, never used, manually tested all the features instead)
- Postman (Backend API testing)
- SWR (Client side fetching and caching)
- Cloudinary (Image storage and upload)

## Setup Instructions:

1. Clone this repository by running `git clone https://github.com/HangCcZ/Code-Challenge-for-Postlight.git`
2. Rename the `.env.example` file to `.env.local` in project root directory to store environment variables. This file is having two variables called `MONGODB_URI` and `LOCALHOST_NAME`
3. Create a (MongoDB)[https://www.mongodb.com/] account, create a new database and wait for database provising (this may take few minutes)... After newly created database is ready, click **connect**, select **Connect your application**, make sure that the driver for is **Node.js**, copy and paste the connection string and assign it to the `MONGODB_URI` in `.env.local`. For example: `MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.2w7rv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`. Make sure to whitelist your IP address in **Security-> Network Access**.
4. In the terminal, run `npm install` and wait for completion
5. Run `npm run dev` in the terminal
6. Assigned the local website address of this application to `LOCALHOST_NAME` in `.env.local`. For example. `LOCALHOST_NAME = http://localhost:3000`
7. Add sample dataset as you wish, manually via UI, Postman, or other method.

## Suggested Features by the Coding Challenge - Completed and Missing

### Features that are completed:

- [x] Setup instructions and notes on how you built the application.
- [x] Use of a frontend framework, ideally React. (Used Next.JS)
- [x] Modern API, we commonly use Node in-house. (Used Next.JS API feature)
- [x] Use of a client-side router. (Used 'use-router' and 'Link' from Next.JS)
- [x] Paginated lists. (Used server side pagination using Mongoose-Paginate-v2)
- [x] Forms for creating, updating, and deleting employees (All completed)
- [x] Source data from a third party person API (Wrote a snippet to consume this data, the data was then 'POST' to MongoDB as sample dataset for the backend)
- [x] Ability to search for employees (Completed with support of pagination)

### Features that are missing:

- [ ] Ability to display employees by department, title, location, etc. (This can be done by sorting the data)
- [ ] Creative use of animation (This feature was not a top priority when building the application, animation to show loading state would be great to have)
- [ ] Testing (Manually tested backend API with Postman, manually tested frontend by making sure completed features work as intended)

## How to make it better in production:

1. Testing!
2. Add animation!
3. Improve website's accessibility
4. Add notification to show the API responses
5. Add code to handle pagination when there are many pages (current pagination UI only work well when totalpages is less than 7)
6. Sorting based on department, title, name etc
7. Searching based on some other constrains eg: department, title, name
8. Add form validation on inputs
9. Add authentication and authorization

## Notes on how I built the application:

### After reading the instructions, I know that I would need the following:

#### Backend:

- **API**: I decided to use the API feature in Next.js to build the backend to avoid hosting a dedicated backend. I do not have much experience with this API feature but wanted to try it out.
- **Database**: I decided to use MongoDB and Mongoose since I had great experience using this particular combination in the past and they are great for rapid prototyping like this.
- **Sample DataSet**: I used `https://randomuser.me` to get the sample data, cleaned them and upload them to MongoDB via POST.
- **Pagination**: I initially thought about client-side pagination but thought it might not be scalable, what if the sample company became the top company and hired 100,000 employee someday. As a result, I decided to go with servr-side pagination. It's new to me but I wanted to try it out.
- **Setup the API and MongoDB / Mongoose**: Pretty straight forward, I looked up an [example](<(https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/pages/api/pets/index.js)>) from Next.js's repository and tweaked a little bit to fit this challenge.
- **/api/employees/** API endpoints that handle GET, POST requests, searching, sorting and pagination based on query string. I thought about client side pagination but it is not really scalable
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
- **Modal**: Use it to confirm employee deletion action
- **Image Upload**: Clouindary to handle the image uploading process in employee profile creation

## Things I didn't know before deploying to Vercel:

- Whitelist access on MongoDB
- Error handling in ./pages/index caused infinite loop because `router.push(/)` is called when error occur
- CORS is not enabled.
- Environmental variables need to start with `NEXT_PUBLIC_` for deployed frontend to access them

## Resources created:

- [Frontend Layout using Figma](https://www.figma.com/file/QtY5OKXeMUcxx1cH1uZFhj/Employee-Directory---Postlight?node-id=0%3A1)

## References and very useful resources:

- [EmployeeTable Component](https://tailwindui.com/components/application-ui/lists/tables)
- [Upload Images to Cloudinary in React & Next.js](https://www.youtube.com/watch?v=7lhUsK-FxYI&ab_channel=ColbyFayock)
- [Next.JS with MongoDB and Mongoose](https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/pages/api/pets/index.js)
- [Server Side Pagination - Node.JS/MongoDb](https://www.bezkoder.com/node-js-mongodb-pagination/)
- [Modal](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular)
