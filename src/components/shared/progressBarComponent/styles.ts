import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    progressBarWrapper: {
        flexDirection: 'column',
    },
    barWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    progressTitle: { width: '15%' },
    buttonsContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});

export const paramsStyle = (props: any) => StyleSheet.create({
    progress: {
        width: props.width - 100,
        height: 8,
        marginRight: 10,
        borderRadius: 10,
        marginBottom: 8,
    }
})