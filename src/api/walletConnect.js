export async function connectAccount() {
	if (window.ethereum) {
		try {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			console.log(accounts);
			return {
				address: accounts[0],
			};
		} catch (error) {
			return {
				address: "",
			};
		}
	} else {
		return {
			address: "",
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
				};
			} else {
				return {
					address: "",
				};
			}
		} catch (error) {
			return {
				address: "",
			};
		}
	} else {
		return {
			address: "",
		};
	}
};
