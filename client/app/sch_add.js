import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { StyleSheet, View } from "react-native";
import Btm_nav_bar from '../components/btn_btm_nav_bar';
import { useNavigation } from '../contexts/navigationContext';
const sch_add = () => {
    const { setActiveTab } = useNavigation();
    useFocusEffect(
        useCallback(() => {
            setActiveTab();
        }, [])
    );
    return (
        <View style={styles.container}>
            <Btm_nav_bar />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default sch_add