import { View, Text, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';

import auth from '@react-native-firebase/auth';
import { Link, router } from 'expo-router';

type LoginDataProps = {
	email: string;
	password: string;
};

export default function Login() {
	const [loginData, setLoginData] = useState<LoginDataProps>({
		email: '',
		password: '',
	});

	function handleLoginClick() {
		auth()
			.signInWithEmailAndPassword(loginData.email, loginData.password)
			.then((res) => {
				console.log(res);
				router.push('/home');
				Alert.alert('deu bom');
			})
			.catch((err) => {
				console.log(err);
				Alert.alert('deu ruim');
			})
			.finally(() => {});
	}

	return (
		<View style={{ justifyContent: 'center' }}>
			<Image
				style={{ width: 10, height: 10 }}
				source={{ uri: 'https://github.com/adrielom.png' }}
			/>
			<View style={{ width: '80%' }}>
				<TextInput
					label='Email'
					mode='outlined'
					keyboardType='email-address'
					onChangeText={(text) =>
						setLoginData((prev) => {
							return {
								email: text,
								password: prev.password,
							};
						})
					}
				/>
				<TextInput
					label='Senha'
					mode='outlined'
					secureTextEntry
					onChangeText={(text) =>
						setLoginData((prev) => {
							return {
								email: prev.email,
								password: text,
							};
						})
					}
				/>
				<Button onPress={handleLoginClick}>
					<Text>Login</Text>
				</Button>
			</View>
		</View>
	);
}
