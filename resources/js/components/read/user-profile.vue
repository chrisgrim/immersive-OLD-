<template>
	<div>
		<h2>{{user.name}}'s profile</h2>
		<button @click.prevent="getLocation()">CLICK</button>

    </div>
</template>

<script>
	import _ from 'lodash';
    import Multiselect from 'vue-multiselect';

    var x = document.getElementById("demo");


	export default {

		props: ['user'],

		components: {
            Multiselect,
        },

		data() {
			return {
      			location: {},
				gettingLocation: false,
				errorStr:''
			}
		},

		methods: {

			getLocation() {
			    if(navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(position => {

						console.log(position.coords);

						axios.get('/api/geo/cache')
						.then(response => {
							console.log(response);
						}).catch(error => {
						});
					})
				};

			},

			
		    
		},


		mounted() {
			

		},





    };
</script>