import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import App from './home';
import Login from './login';
import { UserContext } from '../src/contexts/userContext';

export default function Main() {
	const { user } = useContext(UserContext) ?? {};

	return <>{user !== undefined ? <App /> : <Login />}</>;
}
