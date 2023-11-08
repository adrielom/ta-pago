import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';

type Props = {
	onPress: () => void;
	iconName: string;
	disabled?: boolean;
};

export default function RoundButton({ onPress, iconName, disabled }: Props) {
	return (
		<TouchableOpacity onPress={onPress}>
			<IconButton
				icon={iconName}
				size={20}
				disabled={disabled ?? false}
				style={{ borderRadius: 20, backgroundColor: '#ccc' }}
			/>
		</TouchableOpacity>
	);
}
