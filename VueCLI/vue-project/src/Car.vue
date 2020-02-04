<template>
	<div class="car">
		<h3>
			Name: {{carName}} / {{reverseName}}
		</h3>

		<p>
			Year: {{carYear}}
		</p>
		
		<button @click='changeName'>
			Изменить
		</button>
		
		<button @click='changeFunc()'>
			Change from parent
		</button>

	</div>
</template>


<script>

	export default {
		// props: ['carName', 'carYear'], 
		// props: {
		// 	carName: String,
		// 	carYear: Number
		// },
		props: {
			carName: {
				type: String,
				required: true,
				default: 'Default Name'
			},
			carYear: Number,
			changeFunc: Function
		},
		methods: {
			changeName() {
				this.carName = 'Mazda',
				this.$emit('nameChanged', this.carName)
			}
		},
		
		computed: {
			reverseName() {
				return this.carName.split('').reverse().join('')
			}
		}
	}

</script>


<style>

	.car {
		border: 1px solid red;
	}

	.car h3 {
		margin-bottom: 25px;
	}

</style>



