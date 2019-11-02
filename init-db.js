var db = connect("mongodb://localhost/admin");

db.createUser(
    {
        user: "username",
        pwd: "password",
        roles: [ { role: "readWrite", db: "logs" } ]
    }
)