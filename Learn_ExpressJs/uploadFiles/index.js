
const app =require('./app');
const port =3003;

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})