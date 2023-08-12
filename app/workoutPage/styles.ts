import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        marginTop: 115,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    progressBarContainer: {
        flexDirection: 'row',
    },
    emoji: {
        marginHorizontal: 10
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'center',
        margin: 'auto',
        padding: 10
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    progressBar: {
        height: 8,
        width: '100%',
        borderRadius: 10
    },
    headerText: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 18
    }, 
    divider: { marginVertical: 25, height: 1.5 }
})