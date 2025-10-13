import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from "react-native";
const Btnsch_add = ({ }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.button}>
                <Ionicons name="add-circle" size={80} color="#000" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        width: 360,
        borderRadius: 16,
        backgroundColor: '#7fe0faff',
        elevation: 5,

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    }
})
export default Btnsch_add;