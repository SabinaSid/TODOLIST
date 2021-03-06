let db=require('../utils/sqlitedb');

exports.info=(r,q)=>{
    q.render('api');
}

exports.get=(r,q)=>{
    db.getTasks(+r.query.id).then(item=>{
        q.json(item ||{});
    });

};

exports.add=(r,q)=>{
    db.getStatuses(+r.body.status).then(status=>{
        r.body.status=status;
        db.addTask(r.body).then(x=>{
            db.getLastTask().then(task=>{
                q.json(task);
            });
        });
    });
};
