import { Ionicons } from '@expo/vector-icons';
import { Stack, useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Btm_nav_bar from '../components/btn_btm_nav_bar';
import Btnsch_add from '../components/btnsch_add';
import Btnsch_list_date from '../components/btnsch_list_date';
import Plancard_List from '../components/plancard_list';
import { useNavigation } from '../contexts/navigationContext';
const sch_List = () => {
    const router = useRouter();
    const { setActiveTab } = useNavigation();
    useFocusEffect(
        useCallback(() => {
            setActiveTab('sch_list');
        }, [])
    );
    const [currentDate, setCurrentDate] = useState(new Date('2025-09-12'));

    const handlePrevDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - 1);
        setCurrentDate(newDate);
    };

    const handleNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + 1);
        setCurrentDate(newDate);
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    };
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.topWhiteBox}>
                <Btnsch_list_date direction="left" onPress={handlePrevDay} />
                <Text style={styles.dateText}>
                    {formatDate(currentDate)}
                </Text>
                <Btnsch_list_date direction="right" onPress={handleNextDay} />
            </View>
            <View style={styles.underWhiteBox}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.allPlanSections}>
                        <TouchableOpacity
                            onPress={() => router.push({ pathname: "/sch_detail", params: { id: 0 } })}
                            activeOpacity={1}
                        >
                            <Plancard_List
                                time="09:00 ~ 09:30"
                                title="아침 운동"
                                location="뚝섬 한강 공원"
                                weather="맑음"
                                departureLocation="집"
                                transport={<Ionicons name="walk" size={16} color="#000" />}
                                journeyTime="10분"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.push({ pathname: "/sch_detail", params: { id: 1 } })}
                            activeOpacity={1}
                        >
                            <Plancard_List
                                time="12:00 ~ 13:00"
                                title="점심 약속"
                                location="밀 플랜비 인하대점"
                                weather="맑음"
                                departureLocation="집"
                                transport={<Ionicons name="walk" size={16} color="#000" />}
                                journeyTime="10분"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.push({ pathname: "/sch_detail", params: { id: 2 } })}
                            activeOpacity={1}
                        >
                            <Plancard_List
                                time="15:00 ~ 18:00"
                                title="알바 가기"
                                location="미소야 인천신기점"
                                weather="맑음"
                                departureLocation="집"
                                transport={<Ionicons name="walk" size={16} color="#000" />}
                                journeyTime="10분"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.push({ pathname: "/sch_detail", params: { id: 2 } })}
                            activeOpacity={1}
                        >
                            <Plancard_List
                                time="15:00 ~ 18:00"
                                title="알바 가기"
                                location="미소야 인천신기점"
                                weather="맑음"
                                departureLocation="집"
                                transport={<Ionicons name="walk" size={16} color="#000" />}
                                journeyTime="10분"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.push({ pathname: "/sch_detail", params: { id: 2 } })}
                            activeOpacity={1}
                        >
                            <Plancard_List
                                time="15:00 ~ 18:00"
                                title="알바 가기"
                                location="미소야 인천신기점"
                                weather="맑음"
                                departureLocation="집"
                                transport={<Ionicons name="walk" size={16} color="#000" />}
                                journeyTime="10분"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.push({ pathname: "/sch_detail", params: { id: 2 } })}
                            activeOpacity={1}
                        >
                            <Plancard_List
                                time="15:00 ~ 18:00"
                                title="알바 가기"
                                location="미소야 인천신기점"
                                weather="맑음"
                                departureLocation="집"
                                transport={<Ionicons name="walk" size={16} color="#000" />}
                                journeyTime="10분"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.push({ pathname: "/sch_add", params: { id: 2 } })}
                            activeOpacity={1}
                        >
                            <Btnsch_add />
                        </TouchableOpacity>



                    </View>
                </ScrollView>
            </View>
            <Btm_nav_bar />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 10
    },
    topWhiteBox: {
        width: 392,
        height: 80,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    dateText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    scrollContent: {
        paddingBottom: 110,
    },
    underWhiteBox: {
        width: 392,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        flex: 1

    },
    allPlanSections: {
        alignItems: 'center',
        marginTop: 15,
        gap: 13,

    }
});
export default sch_List