const axios = require('axios');

export async function displayTask() {

    const response = await axios.get('http://localhost:4000/todo');
    return response.data;
}

export async function addTask(data) {
    const response = await axios.post('http://localhost:4000/todo/', {task: data});
    return response.data;
}
export async function deleteTask(id) {
console.log(id,"id");
    const response = await axios.delete('http://localhost:4000/todo/'+id);
    return response.data;
}

export async function updateTodo(data) {
    const id = data.id
    const response = await axios.patch('http://localhost:4000/todo/'+id, {task:data});
    return response.data;
    }
    
