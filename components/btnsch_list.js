import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const BtnSch_List = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <View style={styles.button}>
                <Ionicons name="list-outline" size={28} color={"#000"} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: { // 아이콘을 담는 원형 컨테이너
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#edededff',

    },
});

export default BtnSch_List;