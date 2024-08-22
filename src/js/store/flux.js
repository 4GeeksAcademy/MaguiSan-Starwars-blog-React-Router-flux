const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [],
			planetsList: [],
			vehiclesList: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			//Obtener datos de los personajes de Star Wars
			getPeopleList: async () => {
				try {
					let response = await fetch("https://swapi.dev/api/people/")
					let data = await response.json()
					setStore({peopleList: data.results})
					// console.log(data);
					return

				} catch (error) {
					console.log(error)
					return
				}
			},
			//result
			getPeopleId: async () => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/people/1`)
					let data = await response.json()
					console.log(data);
					return

				} catch (error) {
					console.log(error)
					return
				}
			},


			// `https://www.swapi.tech/api/people/${id}`

			// getPeopleList: () => {
			// 	fetch("https://www.swapi.tech/api/people/")
			// 	.then ((response) => response.json())
			// 	.then ((data) => setStore({peopleList: data.result}))
			// 	.catch ((error) => console.log(error))
			// },

			// getPlanetsList: () => {
			// 	fetch("https://www.swapi.tech/api/planets/")
			// 	.then ((response) => response.json())
			// 	.then ((data) => setStore({planetsList: data.results}))
			// 	.catch ((error) => console.log(error))
			// },

			// getVehiclesList: () => {
			// 	fetch("https://www.swapi.tech/api/vehicles/")
			// 	.then ((response) => response.json())
			// 	.then ((data) => setStore({vehiclesList: data.results}))
			// 	.catch ((error) => console.log(error))
			// },



			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
