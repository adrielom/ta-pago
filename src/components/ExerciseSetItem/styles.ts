import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    surface: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 24,
    },
    headerTitle: { fontWeight: '600', fontSize: 16 },
    image: {
        marginTop: 10,
        width: '100%',
        aspectRatio: 4 / 3,
    },
    repsTextContainer: { marginVertical: 10 },
    repsText: { fontStyle: 'italic' }
})