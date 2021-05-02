const express = require('express')
const app = express()
//const handlebars = require('express-handlebars')
///const bodyParser = require('body-parser')
//const Sequelize = require('sequelize')
//const Post = require('./handlebars')




//Config
    //Template Engine

    //app.engine('handlebars',handlebars({defaultLayout: 'chutador de balde'}))
    //app.set('view engine','handlebars')


// BodyParser

    //app.use(bodyParser.urlencoded({extended: false}))
    ////app.use(bodyParser.json())

//Conexão com o banco de dados mysql
        
//const sequelize = new Sequelize('estudo','root','',{

   // host:'localhost',
   // dialect: 'mysql'

   // })



//Rota


        app.get('/',function(req,res){

               res.sendFile(__dirname + '/chutador de balde.html') 

        })




    


    app.listen(8081, function(){

        console.log('Servidor rodando na url http://localhost:8081')
        
        
        
        
        })