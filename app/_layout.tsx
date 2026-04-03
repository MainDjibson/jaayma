import '../lib/i18n';
import { Stack } from 'expo-router';
import { AppProvider } from '../lib/appCtx';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
export default function RootLayout(){
  const { t } = useTranslation();
  useEffect(()=>{ t('appTitle'); },[]);
  return (<AppProvider><Stack screenOptions={{ headerShown:false }} /></AppProvider>);
}
