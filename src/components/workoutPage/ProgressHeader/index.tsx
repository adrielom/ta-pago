import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { ActivityIndicator, ProgressBar, Surface } from 'react-native-paper';
import {
	IWorkoutRecordContext,
	WorkoutRecordContext,
} from '../../../contexts/workoutSetContext';
import RoundButton from '../../shared/roundButton';
import { paramsStyles, styles } from './styles';
import { ProgressHeaderProps } from './types';

const ProgressHeader = ({
	onPressFinish,
	onPressReset,
	onPressStart,
	onPressPause,
}: ProgressHeaderProps) => {
	const [workoutTimer, setWorkoutTimer] = useState(0);
	const { progress, isPlayOn, dispatch, state, exercises } = useContext(
		WorkoutRecordContext
	) as IWorkoutRecordContext;

	useEffect(() => {
		let timer: NodeJS.Timeout | undefined = undefined;
		if (isPlayOn) {
			timer = setInterval(() => {
				setWorkoutTimer(workoutTimer + 1);
			}, 1000);
		}
		return () => {
			if (isPlayOn) {
				clearInterval(timer);
			}
		};
	}, [isPlayOn, workoutTimer]);

	const formattedTimer = () => {
		return new Date(workoutTimer * 1000).toTimeString().split(' ')[0];
	};

	const formattedProgress = () => {
		return exercises?.length > 0
			? Math.ceil((progress / exercises?.length) * 100)
			: 0;
	};

	const renderEmoji = () => {
		const prog = Math.ceil((progress / exercises?.length) * 100);
		switch (true) {
			case prog >= 0 && prog <= 24:
				return <Text>😒</Text>;
			case prog >= 25 && prog <= 49:
				return <Text>😏</Text>;
			case prog >= 50 && prog <= 74:
				return <Text>😊</Text>;
			case prog >= 75 && prog <= 99:
				return <Text>😀</Text>;
			case prog >= 100:
				return <Text>😁</Text>;
			default:
				break;
		}
	};

	return (
		<>
			<Surface style={styles.header}>
				<View style={styles.headerTop}>
					<Text style={styles.headerText}>Progresso do Treino</Text>
					<Text style={styles.emoji}>{renderEmoji()}</Text>
				</View>
				<View style={styles.progressBarContainer}>
					<ProgressBar
						visible={true}
						progress={getProgress()}
						style={paramsStyles(Dimensions.get('window').width - 100).progress}
					/>
					<Text>{formattedProgress()}%</Text>
				</View>
				<View style={styles.headerActions}>
					<RoundButton
						iconName='refresh'
						onPress={() => {
							onPressReset();
							dispatch({
								type: 'setIsPlayingOn',
								payload: {
									...state,
									isPlayOn: false,
									startTime: new Date(),
								},
							});
							setWorkoutTimer(0);
						}}
					/>
					{!isPlayOn ? (
						<RoundButton
							iconName='play'
							onPress={() => {
								onPressStart();
								setWorkoutTimer(workoutTimer);
								dispatch({
									type: 'setIsPlayingOn',
									payload: {
										...state,
										isPlayOn: !isPlayOn,
									},
								});
							}}
						/>
					) : (
						<View
							style={{
								flexDirection: 'column',
								alignItems: 'center',
								gap: 2,
							}}>
							<RoundButton
								iconName='pause'
								onPress={() => {
									onPressPause();
									dispatch({
										type: 'setIsPlayingOn',
										payload: {
											...state,
											isPlayOn: !isPlayOn,
										},
									});
								}}
							/>
							<Text>{formattedTimer()}</Text>
						</View>
					)}
					<RoundButton
						disabled={progress !== exercises?.length}
						iconName='check-bold'
						onPress={onPressFinish}
					/>
				</View>
			</Surface>
		</>
	);

	function getProgress(): number {
		return exercises?.length > 0 ? progress / exercises?.length : 0;
	}
};

export default ProgressHeader;
