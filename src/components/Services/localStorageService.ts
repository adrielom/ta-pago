import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLocalStorageData = async (callback: Function, key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			callback(JSON.parse(value));
		}
	} catch (error) {
		throw error;
	}
};

export const setLocalStorageData = (key: string, args: object | null) => {
	try {
		console.log(args);
		AsyncStorage.setItem(key, args ? JSON.stringify(args) : '');
	} catch (error) {
		throw error;
	}
};

export const removeLocalStorageData = (key: string) => {
	try {
		AsyncStorage.removeItem(key);
	} catch (error) {
		throw error;
	}
};
