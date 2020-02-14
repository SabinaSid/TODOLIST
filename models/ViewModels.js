exports.Task=class{
    /**
     * @param {String} title
     * @param {Date} start
     * @param {Date} end
     * @param {String} status
     */
    constructor(title,start,end,status){
        this.title=title || '';
        this.start=start || new Date();
        this.end=end || new Date();
        this.status=status || '';
    }
}
exports.MainViewModel=class{
    /**
     * @param {String} title Title
     * @param {Array<Task>} task Array
     */
    constructor(title,task){
        this.title=title || '';
        this.task=task || '';
    }
}