<template>
	<main class="todos">
		<template v-if="!loading">
			<todo-card v-for="todo in todos" :key="todo.id" :todo="todo" />
		</template>
		<template v-else>
			Loading...
		</template>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoCard from '@/components/TodoCard.vue'
import Services from '@/services/todos'
import { TodoItem } from '@/types'

export default defineComponent({
	name: 'TodoList',

	data() {
		return {
			todos: [] as TodoItem[],
			loading: true
		}
	},

	components: {
		TodoCard,
	},

	mounted() {

		Services.getTodos()
			.then(res => {
				this.todos = res.data
			})
			.catch(rej => {
				console.log(rej)
			})
			.then(() => this.loading = false)
	}
})
</script>

<style lang="scss" scoped>
.todos {
	display: flex;
	flex-flow: wrap;
	justify-content: center;
}
</style>