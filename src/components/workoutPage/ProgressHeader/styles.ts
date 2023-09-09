import { StyleSheet } from 'react-native';


export const paramsStyles = (width: number) => StyleSheet.create({
    progress: {
        width: width,
        height: 8,
        marginRight: 10,
        borderRadius: 10,
    }
})

export const styles = StyleSheet.create({
    progressBarContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
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
        flexDirection: 'row', justifyContent: 'space-between' 
    },
    headerActions: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    progressBar: {
        height: 8,
        width: 50,
        borderRadius: 10
    },
    headerText: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 18
    }, 
})