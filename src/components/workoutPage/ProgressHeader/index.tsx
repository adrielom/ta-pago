import { View, Text, Dimensions } from 'react-native';
import React, { useEffect, useReducer, useState } from 'react';
import { ActivityIndicator, ProgressBar, Surface } from 'react-native-paper';
import RoundButton from '../../shared/roundButton';
import { ProgressHeaderProps } from './types';
import { paramsStyles, styles } from './styles';
import {
	initialState,
	workoutPageReducer,
} from '../../../../app/workoutPage/reducer';

const ProgressHeader = ({
	onPressFinish,
	onPressReset,
	onPressStart,
	onPressPause,
}: ProgressHeaderProps) => {
	const [workoutTimer, setWorkoutTimer] = useState(0);
	const [state, dispatch] = useReducer(workoutPageReducer, initialState);
	const { isPlayOn, exercises, progress } = state;

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
	}, [workoutTimer]);

	useEffect(() => {
		console.log('st ', state);
	}, [state]);

	const formattedTimer = () => {
		return new Date(workoutTimer * 1000).toTimeString().split(' ')[0];
	};

	const formattedProgress = () => {
		return exercises.length > 0
			? Math.ceil((progress / exercises.length) * 100)
			: 0;
	};

	const renderEmoji = () => {
		const prog = Math.ceil((progress / exercises.length) * 100);
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
			{exercises.length > 0 ? (
				<Surface style={styles.header}>
					<View style={styles.headerTop}>
						<Text style={styles.headerText}>Progresso do Treino</Text>
						<Text style={styles.emoji}>{renderEmoji()}</Text>
					</View>
					<View style={styles.progressBarContainer}>
						<ProgressBar
							visible={true}
							progress={exercises.length > 0 ? progress / exercises.length : 0}
							style={
								paramsStyles(Dimensions.get('window').width - 100).progress
							}
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
							disabled={progress !== exercises.length}
							iconName='check-bold'
							onPress={onPressFinish}
						/>
					</View>
				</Surface>
			) : (
				<ActivityIndicator />
			)}
		</>
	);
};

export default ProgressHeader;
