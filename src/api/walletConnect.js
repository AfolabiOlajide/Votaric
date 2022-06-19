export async function connectAccount() {
	if (window.ethereum) {
		try {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			console.log(accounts);
			return {
				address: accounts[0],
				status: true,
			};
		} catch (error) {
			return {
				address: "",
				status: false,
			};
		}
	} else {
		return {
			address: "",
			status: false,
		};
	}
}

export const getCurrentWalletConnected = async () => {
	if (window.ethereum) {
		try {
			const accounts = await window.ethereum.request({
				method: "eth_accounts",
			});
			if (accounts.length > 0) {
				return {
					address: accounts[0],
					status: true,
				};
			} else {
				return {
					address: "",
					status: false,
				};
			}
		} catch (error) {
			return {
				address: "",
				status: false,
			};
		}
	} else {
		return {
			address: "",
			status: false,
		};
	}
};
