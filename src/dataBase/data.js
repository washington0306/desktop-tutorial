const sequencia = {
    _id: 1,
    get id() {return this.id++}
}

const alunos = {}

function salvarAluno(aluno) {

    if(!aluno.id) {
        aluno.id = sequencia.id
    }
    alunos[aluno.id] = aluno

    return aluno
}

function getAluno(id){
    return alunos[id] || {}
}

function getAlunos(){
    return object.value(alunos)
}

function deleteAluno(id){
    const aluno = aluno[id]
    delete alunos[id]
    return aluno
}

module.exports = {deleteAluno, salvarAluno, getAluno, getAlunos}