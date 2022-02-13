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

- **/api/employees/** API endpoints that handle GET, POST requests and pagination based on query string. I thought about client side pagination but it is not really scalable
- **/api/employees/[id]** API endpoint that handle GET, PUT and DELETE request on single entity
- A MongoDB database to store data since API mockup is not being used

#### Frontend:

- It is easier to code user interface based on a actual layout and I decided to design a simple [interface](https://www.figma.com/file/QtY5OKXeMUcxx1cH1uZFhj/Employee-Directory---Postlight?node-id=0%3A1) using Figma.
- Based on the interface designed above, I broke down the app into following components:
  - 'SearchBar',
  - 'EmployeeList/EmployeeTable' (I found a component that acheive 99% of I was planning on [TailwindUI](https://tailwindui.com/components/application-ui/lists/tables))
  - 'EmployeeItem',
  - 'EditButton' in 'EmployeeItem', 'MoreButton' in 'EmployeeItem',
  - 'PaginationGroup',
  - 'PageButton' in 'PaginationGroup', 'PrevButton' and 'NextButton' in PaginationGroup
- Use React Hook Forms to handle creating and updating employee

## Resources created:

- [Frontend Layout using Figma](https://www.figma.com/file/QtY5OKXeMUcxx1cH1uZFhj/Employee-Directory---Postlight?node-id=0%3A1)

## References:

- [EmployeeTable Component](https://tailwindui.com/components/application-ui/lists/tables)
- [Upload Images to Cloudinary in React & Next.js](https://www.youtube.com/watch?v=7lhUsK-FxYI&ab_channel=ColbyFayock)
