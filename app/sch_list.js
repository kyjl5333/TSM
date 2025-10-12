import { Ionicons } from '@expo/vector-icons';
import { Stack, useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { StyleSheet, View } from "react-native";
import Btm_nav_bar from '../components/btm_nav_bar';
import Plancard_List from '../components/plancard_list';
import { useNavigation } from '../contexts/navigationContext';
const sch_List = () => {
    const { setActiveTab } = useNavigation();
    useFocusEffect(
        useCallback(() => {
            setActiveTab('sch_list');
        }, [])
    );
    return (
        <View style={styles.container}>
            <Btm_nav_bar />
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.whiteBox}>
                <View style={styles.allPlanSections}>
                    <Plancard_List
                        time="09:00 ~ 09:30"
                        title="아침 운동"
                        location="뚝섬 한강 공원"
                        weather="맑음"
                        departureLocation="집"
                        transport={<Ionicons name="walk" size={16} color="#000" />}
                        journeyTime="10분"
                    />
                    <Plancard_List
                        time="12:00 ~ 13:00"
                        title="점심 약속"
                        location="밀 플랜비 인하대점"
                        weather="맑음"
                        departureLocation="집"
                        transport={<Ionicons name="walk" size={16} color="#000" />}
                        journeyTime="10분"
                    />
                    <Plancard_List
                        time="15:00 ~ 18:00"
                        title="알바 가기"
                        location="미소야 인천신기점"
                        weather="맑음"
                        departureLocation="집"
                        transport={<Ionicons name="walk" size={16} color="#000" />}
                        journeyTime="10분"
                    />
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    whiteBox: {
        width: 392,
        height: 750,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: 50,

    },
    allPlanSections: {
        alignItems: 'center',
        marginTop: 15,
        gap: 13
    }
});
export default sch_List