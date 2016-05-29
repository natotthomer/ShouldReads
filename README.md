# ShouldReads

Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.


## Heroku Link

http://should-reads.herokuapp.com/


## Minimum Viable Product

ShouldReads is a web application inspired by GoodReads. Using Ruby on Rails and React.js it will,
at a minimum, satisfy the following criteria by the end of Week 9:

- [ ] New account creation, login, and guest/demo login
- [ ] Bug-free, easy-to-use navigation
- [ ] Adequate seed data to show depth and breadth of site's features
- [ ] Hosting on Heroku
- [ ] Visually-appealing (and matching) CSS styling
- [ ] A production README
- [ ] Bare-minimum features to be a GoodReads clone:
  - [ ] Book creation (importing Amazon API??)
  - [ ] Book editing
  - [ ] Create Book Ratings, Reviews, Shelves
  - [ ] Mark Books as "want to read", "read", and "currently reading"
  - [ ] View other Users' Books, Shelves and Reviews


** Product Goals and Priorities **

ShouldReads will allow users to do the following:

1) Create an account (MVP)
2) Log in and out (including a Guest/Demo user login ) (MVP)
3) Create, read, and delete Books (MVP)
4) Organize Books into Shelves (MVP)
5) Rate/review Books (MVP)
6) Mark Books as "want to read", "read", and "currently reading" (MVP)
7) Search functionality (MVP)
8) Profile (MVP)
9) Tag Books with Genres (not MVP)
10) Friends (not MVP)
11) Most Read Authors, Most Read Books (not MVP)

## Design Docs

* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API Endpoints][api-endpoints]
* [DB Schema][schema]

[views]: ./docs/wireframes
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user sign-up/sign-in pages
- [ ] user logout
- [ ] blank landing page after sign-in

### Phase 2: Books Model, API, and basic APIUtil (1.5 days)

**Objective:** Books can be created, read, edited and destroyed through
the API.

- [ ] create `Book` model
  - [ ] set up validations/constraints
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for books (`BooksController`)
- [ ] jBuilder views for books
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.


### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Books can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each book component, building out the flux loop as needed.
  - [ ] `BooksIndex`
  - [ ] `BookIndexItem`
  - [ ] `BookForm`
- [ ] save Books to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles
- [ ] match GoodReads' style

### Phase 5: Shelves (1 day)

**Objective:** Books belong to Shelves, and can be viewed by shelf.

- [ ] create `Shelf` model
- build out API, Flux loop, and components for:
  - [ ] Shelf CRUD
  - [ ] adding books requires a shelf
  - [ ] moving books to a different shelf
  - [ ] viewing book by shelf
- Use CSS to style new views

Phase 3 adds organization to the Books. Books belong to a Shelf,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Books can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for shelf
  - [ ] adding tags to shelf
  - [ ] creating tags while adding to shelves
  - [ ] searching shelves by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Books (0.5 days)

**objective:** Enable complex styling of books.

- [ ] Integrate Amazon API.
- [ ] Use Rails helpers to sanitize HTML before rendering. ???????????????????????????

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.
  `NB`: Do I need modals?

### Bonus Features (TBD)
- [ ] Changelogs for Books
- [ ] Multiple sessions
- [ ] Add `read`, `want to read` or `reading` status
- [ ] Add recommended books
- [ ] Friends/Followers
- [ ] Most read books/most read authors
- [ ] Automatically seed data as Amazon adds things ???

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
