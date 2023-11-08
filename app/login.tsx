import React, { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { ActivityIndicator, TextInput } from 'react-native-paper';

import auth from '@react-native-firebase/auth';
import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { palette } from '../constants/Colors';

type LoginDataProps = {
	email: string;
	password: string;
};

export default function Login() {
	const [loginData, setLoginData] = useState<LoginDataProps>({
		email: '',
		password: '',
	});

	const [isLoading, setIsLoading] = useState(false);

	function handleLoginClick() {
		if (loginData.email === '' || loginData.password === '') {
			Alert.alert(
				'Informações faltando',
				'Parece que você não preencheu algum campo'
			);
			return;
		}
		setIsLoading(true);
		auth()
			.signInWithEmailAndPassword(loginData.email, loginData.password)
			.catch((err) => {
				console.log(err);
				Alert.alert('Problema com email e senha');
			})
			.finally(() => setIsLoading(false));
	}

	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<View
				style={{
					justifyContent: 'space-around',
					alignItems: 'center',
					flex: 1,
				}}>
				<Image
					style={{ width: 250, height: 250 }}
					source={{ uri: 'https://github.com/adrielom.png' }}
				/>
				<View style={{ width: '80%', gap: 25 }}>
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
					<TouchableOpacity
						onPress={handleLoginClick}
						style={{
							width: '100%',
							backgroundColor: palette.naplesYellow.default,
							height: 45,
							marginTop: 10,
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 50,
						}}>
						{isLoading ? (
							<ActivityIndicator color='white' animating={true} />
						) : (
							<Text style={{ fontWeight: 'bold', color: 'white' }}>Login</Text>
						)}
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
}
