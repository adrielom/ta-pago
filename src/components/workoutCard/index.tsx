import { View } from 'react-native';
import React from 'react';
import { WorkoutCardDTO, WorkoutCardProps } from './types';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { styles } from './styles';

const WorkoutCard = ({ imgUrl, id, title }: WorkoutCardProps) => {
	return (
		<Link
			style={styles.link}
			href={{
				pathname: '/workoutPage/',
				params: { title: title, id: id } as WorkoutCardDTO,
			}}>
			<Card elevation={3} style={styles.card}>
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
