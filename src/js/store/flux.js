const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleListDev: [],
			peopleList: [],
			characterId: {},
			planetsList: [],
			planetId: {},
			vehiclesList: [],
			vehicleId: {},
			favorites: [],
		},
		actions: {
			//-------------------------------PERSONAJES------------------------------- 
			// Personajes de la base de datos  SWAPI.dev revisar
			getPeopleListDev: async () => {
				try {
					let response = await fetch("https://swapi.dev/api/people/")
					let data = await response.json()
					setStore({peopleListDev: data.results})
					console.log(data);
					return

				} catch (error) {
					console.log(error)
					return
				}
			},

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
			//-------------------------------FAVORITOS-------------------------------
			//Agregando favoritos
			addFavorites: (fav) => {
				const store = getStore();
				if(!store.favorites.includes(fav)){
					setStore({favorites:[...store.favorites, fav]});
				}
			},
			//Eliminando favoritos
			deleteFavorite: (fav)=> {
				const store = getStore();
				let newFavorites = store.favorites.filter((item) => item !== fav)
				setStore({favorites: newFavorites})
			},
		}
	};
};

export default getState;
