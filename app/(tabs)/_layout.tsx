import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useApp } from '../../lib/appCtx';
import { useTranslation } from 'react-i18next';
export default function TabsLayout(){
  const insets = useSafeAreaInsets();
  const { role } = useApp();
  const { t } = useTranslation();
  const tabBarStyle:any = { paddingBottom: Math.max(insets.bottom,8), height: 60+Math.max(insets.bottom,8), borderTopWidth:0.5, borderTopColor:'#ccc', backgroundColor:'#fff' };
  const isBuyer = role === 'buyer'; const notBuyer = role !== 'buyer';
  return (
    <Tabs screenOptions={{ headerTitle: t('appTitle'), tabBarStyle }}>
      <Tabs.Screen name="index" options={{ title: t('tabs.products') }} />
      {isBuyer && <Tabs.Screen name="wishlist" options={{ title: t('tabs.wishlist') }} />}
      {isBuyer && <Tabs.Screen name="cart" options={{ title: t('tabs.cart') }} />}
      <Tabs.Screen name="profile" options={{ title: t('tabs.profile') }} />
      {notBuyer && <Tabs.Screen name="dashboard" options={{ title: t('tabs.dashboard') }} />}
    </Tabs>
  );
}
