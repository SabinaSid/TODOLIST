class Status {
    constructor(id, name){
        this.name=name;
        this.id=id;
    }
}
exports.Status=Status;

class Task {
    constructor(id, title,start,end,status){
        let dateNow=new Date().toISOString().split('T')[0];

        this.title=title || '';
        this.startDate=start || dateNow;
        this.endDate=end || dateNow;
        this.status=status || null;
        this.id=id;
    }
}
exports.Task=Task;

exports.MainViewModel =class {
    constructor(title, tasks, statuses, editItem){
        this.title=title || '';
        this.tasks=tasks || '';
        this.statuses=statuses || [];
        this.editItem=editItem || null;
    }
}