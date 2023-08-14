import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { WorkoutCardDTO, WorkoutCardProps } from './types';
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkoutCard = ({ imgUrl, id, title }: WorkoutCardProps) => {
	const [isLastDone, setIsLastDone] = useState(false);

	useEffect(() => {
		const cacheId = getData();
		if (cacheId && id === Number(cacheId)) {
			setIsLastDone(true);
		}
	}, []);

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('lastDone');
			if (value !== null) {
				return value;
			}
		} catch (e) {
			// error reading value
		}
	};

	return (
		<Link
			style={styles.link}
			href={{
				pathname: '/workoutPage/',
				params: { title: title, id: id } as WorkoutCardDTO,
			}}>
			<Card elevation={3} style={styles.card}>
				{isLastDone && (
					<IconButton
						icon={'check'}
						size={10}
						iconColor='white'
						style={{
							position: 'absolute',
							right: 10,
							top: 10,
							zIndex: 10,
							backgroundColor: 'green',
						}}
					/>
				)}
				<Card.Cover
					style={styles.cardCover}
					source={{ uri: imgUrl || 'https://picsum.photos/700' }}
				/>
				<Card.Content>
					<Text style={styles.cardContent} variant='titleLarge'>
						{title}
					</Text>
				</Card.Content>
			</Card>
		</Link>
	);
};

export default WorkoutCard;
