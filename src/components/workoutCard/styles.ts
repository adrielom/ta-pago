import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width * 0.4
const height = Dimensions.get('window').height * 0.2

export const styles = StyleSheet.create({
    link: {
        padding: 10,
    },
    card: { height: height, width: width, position: 'relative' },
    cardCover: { borderRadius: 5, maxHeight: 180 },
    cardContent: {
        width: '100%',
        height: 200,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    }
})