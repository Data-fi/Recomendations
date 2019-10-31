# Recommedantions Service

> Displays listings nearby

## Related Projects

  - https://github.com/haab-solutions/photo-gallery-module
  - https://github.com/haab-solutions/reviews-module
  - https://github.com/haab-solutions/recommendations-module
  - https://github.com/haab-solutions/reservation-module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Setup config.js in ./database/

## Requirements

- Node 10.16

## Development

- npm run seed
- npm run build:dev
- npm run start:dev

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### CRUD API

POST /rooms/:id/recommendations
post a new recommendation to the room listing with an id of :id

GET /rooms/:id/recommendations
gets all recommended rooms for the room listing with an id of :id

PUT /rooms/:id/recommendations/:recid
Update recommendation at the id of :recid

DELETE /rooms/:id/recommendations/:recid
Deleteds recommendation at the id of :recid

