import axios from 'axios'
export default {
	getTodos(){
		return axios.get('todos')
	},

	getTodo(id: number) {
		return axios.get(`/todos/${id}`)
	}
}
