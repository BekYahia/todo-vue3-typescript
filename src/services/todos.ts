import axios from 'axios'

const url = process.env.NODE_ENV === 'production'
	? 'https://jsonplaceholder.typicode.com'
	: ''

export default {
	getTodos(){
		return axios.get(`${url}/todos`)
	},

	getTodo(id: number) {
		return axios.get(`${url}/todos/${id}`)
	}
}
