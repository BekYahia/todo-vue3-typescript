<template>
	<template v-if="!loading">
		<h2>{{ todo.title }}</h2>
		<p><strong>Completed:</strong> {{ todo.completed }}</p>
		<p><strong>Onwer id:</strong> {{ todo.userId }}</p>
	</template>
	<template v-else>
		loading...
	</template>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import Services from '@/services/todos'
import { TodoItem } from '@/types'

export default defineComponent({
	name: 'TodoDetails',

	props: {
		id: {
			type: [Number, String],
			required: true
		},
	},

	data() {
		return {
			todo: {} as TodoItem,
			loading: true
		}
	},

	mounted() {
		Services.getTodo(+this.id)
		.then(res => {
			this.todo = res.data
			console.log(res.data)
		})
		.catch(rej => {
			console.log(rej)
		})
		.then(() => this.loading = false )
	}
})
</script>

<style>

</style>