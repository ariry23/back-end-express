/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'salonbeaute';
const collection = 'NEW_COLLECTION_NAME';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

db.getCollection("user").drop() ; 


db.createCollection('roles', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'role name must be a string',
        },
        description: {
          bsonType: 'string',
          description: 'description',
        },
       
      },
    },
  },
});


var rolesData = [
  { name: "employee", description: "Employee role description" },
  { name: "admin", description: "Admin role description" },
  { name: "customer", description: "Customer role description" }
];

// Insert role data into the "roles" collection
db.roles.insertMany(rolesData);



db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['email', 'username', 'password'],
      properties: {
        email: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        username: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        password: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        role: {
          bsonType: 'objectId',
          description: 'must be an objectId and is required'
        }
      }
    }
  }
});



db.getCollection("roles").find({});

db.getCollection("roles").deleteMany({});




