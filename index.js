let express = require('express');
let app = express();
//let bodyParser = require('body-parser'); 
//app.use(bodyParser.json());
//If you are using Express 4.17 or greater, instead of the "body-parser" module, you can adding the following lines of code：（取消上面的2行代码）
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//DB initial code
let Datastore = require('nedb');
let db = new Datastore('thing.db');
db.loadDatabase();

let taskTracker = [];

//app.get('/',(request, response)=> {
//   response.send('this is the main page');
//})

//add a route on server, that is listening for a post request
 app.post('/noThings', (request, response)=> {
     //console.log(request.body);
     

     let obj = {
        
        task: request.body.number
    }
    
    console.log(obj);
    //insert task  data into the database
    db.insert(obj,(err, newDocs)=> {
        if(err) {
            response.json({task: "task failed"});
        } else {
            db.find({}, (err, docs)=> {
                if(err) {
                    response.json({task: "task failed"})
                } else {
                    let obj = {data: docs};
                    response.json(obj);
                }
        
            })
        }

    })
    

})


//serve the static files in public
app.use('/', express.static('public'));


//listen at port 5000
let port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log('listening at ', port);
})