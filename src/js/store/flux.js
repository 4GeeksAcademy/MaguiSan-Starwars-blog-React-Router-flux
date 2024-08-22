const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [],
			characterId: {},
			// peopleListDev: [],
			planetsList: [],
			planetId: {},
			vehiclesList: [],
			vehiclesId: {},
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
			//-------------------------------PERSONAJES------------------------------- 
			// Personajes de la base de datos  SWAPI.dev
			// getPeopleListDev: async () => {
			// 	try {
			// 		let response = await fetch("https://swapi.dev/api/people/")
			// 		let data = await response.json()
			// 		setStore({peopleListDev: data.results})
			// 		console.log(data);
			// 		return

			// 	} catch (error) {
			// 		console.log(error)
			// 		return
			// 	}
			// },
			// Personajes de la base de datos  SWAPI.tech
			getPeopleList: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people/")
					let data = await response.json()
					setStore({peopleList: data.results})
					// console.log(data);
					return

				} catch (error) {
					console.log(error)
					return
				}
			},
			//Datos de cada personaje segun su Id con SWAPI.tech
			getCharacterId: async (id) => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					let data = await response.json()
					setStore({characterId: data.result})
					// console.log(data);
					return

				} catch (error) {
					console.log(error)
					return
				}
			},
			//-------------------------------PLANETAS-------------------------------
			// Planetas de la base de datos  SWAPI.tech
			getPlanetsList: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/planets/")
					let data = await response.json()
					setStore({planetsList: data.results})
					// console.log(data);
					return

				} catch (error) {
					console.log(error)
					return
				}
			},
			// Datos de cada planeta segun su Id con SWAPI.tech
			getPlanetId: async (id) => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					let data = await response.json()
					setStore({planetId: data.result})
					// console.log(data);
					return

				} catch (error) {
					console.log(error)
					return
				}
			},
			//-------------------------------VEHICULOS-------------------------------
			//Vehiculos de la base de datos  SWAPI.tech
			getVehiclesList: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/vehicles/");
					let data = await response.json();
					setStore({vehiclesList: data.results});
					// console.log(data);
					return

				} catch (error) {
					console.log(error);
					return
				}
			},
			// Datos de cada vehiculo segun su Id con SWAPI.tech
			getVehicleId: async (id) => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
					let data = await response.json();
					setStore({vehicleId: data.result});
					// console.log(data);
					return

				} catch (error) {
					console.log(error);
					return
				}
			},

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
