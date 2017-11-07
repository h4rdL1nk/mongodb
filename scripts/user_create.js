
conn = new Mongo("127.0.0.1:27017");
db = conn.getDB("admin");


if ( ! db.getRole("dbs-ro")){
    
    db.createRole(
        {
            role:"dbs-ro",
            privileges:[
                {resource:{db:"",collection:""},actions:["find"]}
            ],
            roles:[]
        }
    );

}

if ( ! db.getUser("ro-user")){

    db.createUser(
        {
            user: "ro-user",
            pwd: "123456",
            roles: [ 
                {role: "dbs-ro",db:"admin"} 
            ]
        }
    );

}
