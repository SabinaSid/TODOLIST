const {MainViewModel}=require('../models');
const db=require('../utils/sqlitedb');
module.exports=(r,q)=>{
    db.getTasks().then(task=>{
        db.getStatuses().then(statuses=>{
            let model= new MainViewModel('TODO LIST',db.getTasks(),db.getStatuses());
            q.render('index',model);
        });
    }); 
}