import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width * 0.95
const height = Dimensions.get('window').height * 0.35

export const styles = StyleSheet.create({
    link: {
        padding: 10,
    },
    card: { height: height, width: width, position: 'relative' },
    cardCover: { borderRadius: 5, maxHeight:220, zIndex: -2 },
    cardContent: {
        width: '100%',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    }
})