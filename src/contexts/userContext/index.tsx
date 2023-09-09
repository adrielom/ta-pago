import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { ReactNode, createContext, useEffect, useState } from 'react';

type UserContextProps = {
	user: FirebaseAuthTypes.User | null;
	setUser: (user: FirebaseAuthTypes.User | null) => void;
};

type UserProviderProps = {
	children: ReactNode;
};

export const UserContext = createContext<UserContextProps | undefined>(
	undefined
);

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(setUser);

		return subscriber;
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
