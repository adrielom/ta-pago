import { View } from 'react-native';
import React from 'react';
import { WorkoutCardProps } from './types';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Link } from 'expo-router';

const WorkoutCard = ({ imgUrl, title }: WorkoutCardProps) => {
	return (
		<Link href={'/workoutPage'}>
			<Card style={{ maxHeight: 250 }}>
				<Card.Cover
					style={{ borderRadius: 5, maxHeight: 180 }}
					source={{ uri: imgUrl || 'https://picsum.photos/700' }}
				/>
				<Card.Content>
					<Text
						style={{
							width: '100%',
							height: '100%',
							textAlign: 'center',
							marginTop: 10,
							fontWeight: 'bold',
						}}
						variant='titleLarge'>
						{title}
					</Text>
				</Card.Content>
			</Card>
		</Link>
	);
};

export default WorkoutCard;
