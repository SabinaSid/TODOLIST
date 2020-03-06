const express=require('express');
const bodyParser=require('body-parser');
const routes=require('./routes');

//создание приложения
let app=express();
//установка порта для приложения
let port=process.env.PORT || 80;
//задаем шаблонизатор для представления
app.set('view engine','pug');
//задаем директорию со статическими файлами
app.use(express.static(__dirname+'public'));
//задаем парсер тела запроса request body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',routes);

//запуск приложения с прослушивания порта
app.listen(port,()=>{
    console.info(`App run on http://localhost:${port} api run on http://localhost:${port}/api`);
});