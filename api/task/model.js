// build your `Task` model here
const db = require("../../data/dbConfig.js");

const getTasks = () => {
    return db("tasks")
}

const findTaskById = (id) => {
    return db("tasks")
    .where({ task_id: Number(id) }).first()
}

const addTask = (task) => {
    return db("tasks")
    .insert(task, "task_id")
    .then(ids => ({ task_id: ids[0] }))
}

module.exports = {
    getTasks,
    findTaskById,
    addTask
}