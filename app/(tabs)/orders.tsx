import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
export default function Orders(){
  const { t } = useTranslation();
  return (<View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:16 }}>
    <Text style={{ fontSize:18, fontWeight:'700' }}>{t('orders.title')}</Text>
  </View>);
}
