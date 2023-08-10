import { View } from 'react-native';
import React from 'react';
import { WorkoutCardProps } from './types';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const WorkoutCard = ({ imgUrl, title }: WorkoutCardProps) => {
	return (
		<Card>
			<Card.Cover source={{ uri: imgUrl || 'https://picsum.photos/700' }} />
			<Card.Content>
				<Text variant='titleLarge'>{title}</Text>
			</Card.Content>
		</Card>
	);
};

export default WorkoutCard;
