import React, { useContext, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { ProgressBar, Text } from 'react-native-paper';
import { palette } from '../../../../constants/Colors';
import RoundButton from '../roundButton';
import { paramsStyle, styles } from './styles';
import { ProgressBarComponentProps } from './types';
import { WorkoutSetContext } from '../../../contexts/workoutSetContext';

const size = Dimensions.get('window').width;

export default function ProgressBarComponent({
	total,
	color = palette.naplesYellow.default,
	onComplete,
	showButtons = true,
	width,
	...rest
}: ProgressBarComponentProps) {
	const [progress, setProgress] = useState(0);

	return (
		<View style={styles.progressBarWrapper} {...rest}>
			<View style={styles.barWrapper}>
				<ProgressBar
					progress={progress / total}
					color={color}
					style={
						paramsStyle({
							width: width || size,
						}).progress
					}
				/>
				<Text style={styles.progressTitle}>
					{Math.ceil((progress / total) * 100)}%
				</Text>
			</View>
			{showButtons && (
				<View style={styles.buttonsContainer}>
					<RoundButton
						iconName='arrow-left'
						onPress={() => {
							if (progress - 1 >= 0) {
								setProgress((prev) => prev - 1);
							}
						}}
					/>
					<RoundButton
						iconName='arrow-right'
						onPress={() => {
							if (progress + 1 > total) return;
							if (progress + 1 === total) {
								onComplete();
							}
							setProgress((prev) => prev + 1);
						}}
					/>
				</View>
			)}
		</View>
	);
}
