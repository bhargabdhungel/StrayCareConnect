##

- get("/sponsors")
  - page = req.query.page
  - description: "Get all sponsors"
  - refer animalPost model and send the sponsor posts
- get("/sponsor")
  - id = req.query.id
  - description: "Get sponsor by id"
- get("/adopts")
  - const page = req.query.page
  - description: "Get all adopt"
  - refer animalPost model and send the adopt posts
- get("/adopt")
  - id = req.query.id
  - description: "Get adopt by id"
