import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

function Btnsch_list_date({ direction = 'left', onPress }) {
    const iconName = direction === 'left' ? 'chevron-back-circle-sharp' : 'chevron-forward-circle-sharp';

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
            activeOpacity={0.7}
        >
            <Ionicons name={iconName} size={40} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Btnsch_list_date;