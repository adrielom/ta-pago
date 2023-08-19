import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import App from './home';
import Login from './login';

export default function Main() {
	const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(setUser);
		return subscriber;
	}, []);

	return <>{user ? <App /> : <Login />}</>;
}
