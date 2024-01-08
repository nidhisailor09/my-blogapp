import express from "express";

let articlesInfo=[{
    name: 'learn-react',
    upvotes: 0,
    comments: [], //adding an empty array

},{
    name: 'learn-node',
    upvotes: 0,
    comments: [],
},{
    name: 'mongodb',
    upvotes: 0,
    comments: [],
}]

const app = express();
app.use(express.json());

//creating an end point
app.put('/api/articles/:name/upvote',(req,res)=>{
    const { name } = req.params;
    const article = articlesInfo.find(a => a.name === name);
    if (article){
        article.upvotes +=1;
        res.send(`The ${name} article now has ${article.upvotes} upvote!!!`);
    }else{
        res.send('That article doesn\'t exist');
    }
});

app.post('/api/articles/:name/comments',(req,res)=>{
    const { name } = req.params;
    const { postedBy, text }=req.body;
    const article = articlesInfo.find(a => a.name === name);

    if(article){
        article.comments.push({postedBy, text});
        res.send(article.comments);
    }else{
        res.send('That article doesn\'t exist');

    }
})


// app.post('/hello',(req,res) =>{
//     res.send(`Hello ${req.body.name}`);
// });

// app.get('/hello/:name', (req,res)=>{
//     // const name= req.params.name;
//     const { name }= req.params; //req.params is going to give all the
//                             //objects comtaining all the url paramteres inside :name
//     res.send(`Hello ${name}!!`);

// });

app.listen(8000,() => {
    console.log('Server is running on port 8000');
})