import { StyleSheet, Text } from "react-native";
const sch_List = () => {
    return (
        <Text style={style.header}>일정 리스트 페이지</Text>

    )
}
const style = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
export default sch_List