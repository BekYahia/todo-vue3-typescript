<template>
	<div class="todo-card">
		<h2><strong></strong> {{ todo.title }}</h2>
		<p><strong>Complete:</strong> {{ todo.completed }}</p>
		<router-link :to="{ name: 'TodoDetails', params: { id: todo.id }}" class="btn">view</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TodoItem } from '@/types'
export default defineComponent({
	name: 'TodoCard',
	props: {
		todo: {
			type: Object as PropType<TodoItem>
		}
	}
})
</script>

<style lang="scss" scoped>
.todo-card {
	border: 1px solid #888;
	margin: 20px;
	padding: 20px;
	width: 300px;
	text-align: left;
	a {
		display: block;
		background-color: #9ec7c7;
		padding: 10px 20px;
		width: 100px;
		margin: auto;
		text-align: center;
		text-decoration: none;
		color: inherit;
		font-size: 18px;
		&:hover {
			transform: scale(1.05);
		};
	}
}
</style>