import { View, Text, Button, Pressable } from 'react-native';
import { useApp } from '../../lib/appCtx';
import i18n from '../../lib/i18n';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
export default function Profile(){
  const { role, setRole, theme, setTheme, lang, setLang } = useApp();
  const { t } = useTranslation(); const router = useRouter();
  const changeLang = (l:'fr'|'en') => { setLang(l); i18n.changeLanguage(l); };
  return (<View style={{ flex:1, padding:16, gap:12 }}>
    <Text style={{ fontSize:18, fontWeight:'700' }}>{t('profile.title')}</Text>
    <View style={{ gap:6 }}><Text>{t('profile.language')}</Text>
      <View style={{ flexDirection:'row', gap:8 }}>
        <Pressable onPress={()=>changeLang('fr')}><Text>FR</Text></Pressable>
        <Pressable onPress={()=>changeLang('en')}><Text>EN</Text></Pressable>
      </View>
    </View>
    <View style={{ gap:6 }}><Text>{t('profile.theme')}</Text>
      <View style={{ flexDirection:'row', gap:8 }}>
        <Pressable onPress={()=>setTheme('light')}><Text>{t('profile.theme_light')}</Text></Pressable>
        <Pressable onPress={()=>setTheme('dark')}><Text>{t('profile.theme_dark')}</Text></Pressable>
        <Pressable onPress={()=>setTheme('system')}><Text>{t('profile.theme_system')}</Text></Pressable>
      </View>
    </View>
    <View style={{ gap:6 }}><Text>{t('profile.role')}</Text>
      <View style={{ flexDirection:'row', gap:8, flexWrap:'wrap' }}>
        <Pressable onPress={()=>setRole('buyer')}><Text>{t('profile.buyer')}</Text></Pressable>
        <Pressable onPress={()=>setRole('seller')}><Text>{t('profile.seller')}</Text></Pressable>
        <Pressable onPress={()=>setRole('ambassador')}><Text>{t('profile.ambassador')}</Text></Pressable>
        <Pressable onPress={()=>setRole('admin')}><Text>{t('profile.admin')}</Text></Pressable>
      </View>
    </View>
    <View style={{ flexDirection:'row', gap:8, flexWrap:'wrap' }}>
      <Button title={t('profile.sign_in')} onPress={()=>{}} />
      <Button title={t('profile.go_admin')} onPress={()=>router.push('/(admin)/dashboard')} />
      <Button title={t('profile.go_seller')} onPress={()=>router.push('/(seller)/dashboard')} />
      <Button title={t('profile.go_amb')} onPress={()=>router.push('/(ambassador)/dashboard')} />
    </View>
  </View>);
}
