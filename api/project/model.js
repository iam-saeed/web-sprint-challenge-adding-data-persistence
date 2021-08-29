// build your `Project` model here
const db = require("../../data/dbConfig.js")

const getProjects = () => {
    return db("projects")
}

const addProject = (project) => {
    return db("projects")
    .insert(project, 'project_id')
    .then(ids => ({ id: ids[0] }));
}

const findProject = (id) => {
    return db("projects")
    .where({ project_id: Number(id) }).first()
}


module.exports = {
    getProjects,
    addProject,
    findProject
}
