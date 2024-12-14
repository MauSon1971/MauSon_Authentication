const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		  token: null,
		},
		actions: {
		  login: async (email, password) => {
			try {
			  const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			  });
	
			  if (resp.ok) {
				const data = await resp.json();
				localStorage.setItem("authToken", data.token);
				setStore({ token: data.token });
				return true;
			  } else {
				return false;
			  }
			} catch (error) {
			  console.error("Error during login:", error);
			  return false;
			}
		  },
	
		  register: async (email, password) => {
			try {
			  const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			  });
	
			  return resp.ok;
			} catch (error) {
			  console.error("Error during registration:", error);
			  return false;
			}
		  },
	
		  loadTokenFromStorage: () => {
			const token = localStorage.getItem("authToken");
			if (token) setStore({ token });
		  },
	
		  logout: () => {
			localStorage.removeItem("authToken");
			setStore({ token: null });
		  },
		},
	  };
	};
	
	export default getState;