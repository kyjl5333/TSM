import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '../contexts/navigationContext';

const Btm_nav_bar = () => {
    const { activeTab, setActiveTab } = useNavigation();
    const router = useRouter();
    const navItems = [
        { id: 'home', label: '홈', iconOutline: 'home-outline', iconFilled: 'home', route: '/home' },
        { id: 'sch_list', label: '일정', iconOutline: 'calendar-outline', iconFilled: 'calendar', route: '/sch_list' },
        { id: 'recom', label: '추천', iconOutline: 'compass-outline', iconFilled: 'compass', route: '/recom' },
        { id: 'profile', label: '프로필', iconOutline: 'person-outline', iconFilled: 'person', route: '/profile' },
    ];

    const handlePress = (item) => {
        if (activeTab === item.id) {
            return;
        }
        setActiveTab(item.id);
        router.replace(item.route);
    };

    return (
        <View style={styles.container}>
            {navItems.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={styles.navItems}
                    onPress={() => handlePress(item)}
                    disabled={activeTab === item.id}
                >
                    <Ionicons
                        name={activeTab === item.id ? item.iconFilled : item.iconOutline}
                        size={35}
                        color={activeTab === item.id ? '#1F2937' : '#6B7280'}
                    />
                    <Text
                        style={[
                            styles.label,
                            activeTab === item.id && styles.activeLabel,
                        ]}
                    >
                        {item.label}
                    </Text>
                    {activeTab === item.id && <View style={styles.activeIndicator} />}
                </TouchableOpacity>
            ))}
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    navItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingVertical: 8,
    },
    icon: {
        fontSize: 24,
        marginBottom: 4,
    },
    label: {
        fontSize: 15,
        color: '#6B7280',
        fontWeight: '500',
    },
    activeLabel: {
        color: '#1F2937',
        fontWeight: '600',
    },
    activeIndicator: {
        position: 'absolute',
        bottom: -12,
        width: 40,
        height: 3,
        backgroundColor: '#000000',
        borderRadius: 2,
    },
});

export default Btm_nav_bar;