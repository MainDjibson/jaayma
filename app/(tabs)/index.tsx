import { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import AdBanner from '../../components/AdBanner';
import { apiGet } from '../../lib/api';
import { useTranslation } from 'react-i18next';
type Product = { id: string; title_fr: string; title_en?: string; priceCFA: number; unit?: string };
export default function Products(){
  const { t } = useTranslation();
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  useEffect(()=>{
    let mounted = true;
    apiGet<Product[]>('/products').then(d => { if(mounted){ setItems(d); } }).catch(e => setErr(String(e))).finally(()=> setLoading(false));
    return ()=>{ mounted = false; }
  },[]);
  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <AdBanner imageUri="https://via.placeholder.com/600" title={t('home.bannerTitle')} tagline={t('home.bannerTag')} phone="+221700000000" email="contact@jaayma.sn" linkUrl="https://jaayma.sn" />
      {loading && <View style={{alignItems:'center'}}><ActivityIndicator /><Text>{t('common.loading')}</Text></View>}
      {err && <Text style={{color:'red'}}>{t('home.error')}: {err}</Text>}
      {!loading && !err && (<FlatList data={items} keyExtractor={(it)=>it.id}
        ListEmptyComponent={<Text>{t('home.empty')}</Text>}
        renderItem={({item})=>(<View style={{ padding:16, borderRadius:12, backgroundColor:'#f5f5f5', marginBottom:8 }}>
            <Text style={{ fontWeight:'700' }}>{item.title_fr}</Text>
            <Text>{item.priceCFA} XOF</Text>
            {item.unit ? <Text>{item.unit}</Text> : null}
        </View>)}
      />)}
    </View>
  );
}
