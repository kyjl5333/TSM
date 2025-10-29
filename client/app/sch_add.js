import { Stack, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import Btm_nav_bar from '../components/btn_btm_nav_bar';
import { useNavigation } from '../contexts/navigationContext';
import { Ionicons } from '@expo/vector-icons';
const sch_add = () => {
    const { setActiveTab } = useNavigation();
    const [text, setText] = useState('');
    const [time, setTime] = useState('');
    const [departureLocation, setDepartureLocation] = useState('');
    const [location, setLocation] = useState('');
    const [memo, setMemo] = useState('');
    useFocusEffect(
        useCallback(() => {
            setActiveTab();
        }, [])
    );
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.topWhiteBox}>
                <TextInput style={styles.inputTitle}
                    value={text}
                    onChangeText={setText}
                    placeholder="제목"
                    placeholderTextColor="#C7C7C7"
                />
                <TextInput style={styles.inputTime}
                    value={time}
                    onChangeText={setTime}
                    placeholder="시간"
                    placeholderTextColor="#C7C7C7"
                ></TextInput>
            </View>
            <View style={styles.middleWhiteBox}>
                <View style={styles.inputRow}>
                    <Ionicons name="location-sharp" size={24} color="#00A8FF" style={styles.iconStyleBlue} />
                    <TextInput style={styles.inputDepartureLocation}
                        value={departureLocation}
                        onChangeText={setDepartureLocation}
                        placeholder="출발지"
                        placeholderTextColor="#C7C7C7"
                    ></TextInput>
                </View>
                <View style={styles.dotLine}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>
                <View style={styles.inputRow}>
                    <Ionicons name="location-sharp" size={24} color="#FF4757" style={styles.iconStyleRed} />
                    <TextInput style={styles.inputLocation}
                        value={location}
                        onChangeText={setLocation}
                        placeholder="도착지"
                        placeholderTextColor="#C7C7C7"
                    ></TextInput>
                </View>
            </View>
            <View style={styles.bottomWhiteBox}>
                <TextInput style={styles.inputMemo}
                    value={memo}
                    onChangeText={setMemo}
                    placeholder="메모"
                    placeholderTextColor="#C7C7C7"
                />
            </View>
            <Btm_nav_bar />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 10,
    },
    topWhiteBox: {
        width: 392,
        height: 180,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: 50,


    },
    inputTitle: {
        fontSize: 45,
        color: '#000',
        paddingVertical: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 10,

    },
    inputTime: {
        fontSize: 30,
        color: '#000',
        paddingVertical: 16,
        marginLeft: 20,
        marginRight: 10,
        fontWeight: '500',
    },
    middleWhiteBox: {
        width: 392,
        height: 115,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 15,
    },
    inputDepartureLocation: {
        flex: 1,
        fontSize: 20,
        color: '#000',
        marginBottom: 3,
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
        fontWeight: '500',
        marginLeft: 15,
        marginRight: 10,
        paddingBottom: 15,

    },
    inputLocation: {
        flex: 1,
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
        marginLeft: 15,
        marginRight: 10,
        marginTop: -25
    },
    dotLine: {
        flexDirection: 'column',
        marginVertical: 1,
        marginLeft: 25,
        top: -15,

    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#C7C7C7',
        marginVertical: 2,
    },
    iconStyleBlue: {
        marginTop: 15,
    },
    iconStyleRed: {
        marginTop: -10,
    },
    bottomWhiteBox: {
        width: 392,
        height: 180,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    inputMemo: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 10,
    }
});
export default sch_add