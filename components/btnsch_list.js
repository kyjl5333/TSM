import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const BtnSch_List = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <View style={styles.button}>
                <Ionicons name="calendar-outline" size={24} color={"#000"} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        // 사용자가 누르기 편하도록 터치 영역을 충분히 확보
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        // 아이콘을 담는 원형 컨테이너
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 30, // 완벽한 원
        backgroundColor: '#edededff',
        elevation: 5, // 안드로이드 그림자
        shadowColor: '#000', // iOS 그림자
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

    },
});

export default BtnSch_List;