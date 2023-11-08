import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { WorkoutCardDTO, WorkoutCardProps } from './types';
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocalStorageData } from '../Services/localStorageService';

const WorkoutCard = ({ imgUrl, id, title, exercises }: WorkoutCardProps) => {
	const [isLastDone, setIsLastDone] = useState(false);

	useEffect(() => {
		getLocalStorageData((e: any) => {
			if (e.id === id) {
				setIsLastDone(true);
			}
		}, 'lastDone');
	}, []);

	return (
		<Link
			style={styles.link}
			href={{
				pathname: '/workoutPage/',
				params: {
					title: title,
					id: id,
					exercisesID: JSON.stringify(exercises),
				} as WorkoutCardDTO,
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
				<Card.Content style={{ zIndex: 10 }}>
					<Text style={styles.cardContent} variant='titleLarge'>
						{title}
					</Text>
				</Card.Content>
			</Card>
		</Link>
	);
};

export default WorkoutCard;
