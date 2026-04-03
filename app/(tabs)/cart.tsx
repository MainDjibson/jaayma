import { View, Text, FlatList, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
const items = [{id:'1', title:'Produit A', priceCFA:2500, qty:1},{id:'2', title:'Produit B', priceCFA:5000, qty:2}];
export default function Cart(){
  const { t } = useTranslation();
  const subtotal = items.reduce((s,i)=>s + i.priceCFA*i.qty,0);
  const delivery = 2000; const total = subtotal + delivery;
  return (<View style={{ flex:1, padding:16, gap:12 }}>
    <Text style={{ fontSize:18, fontWeight:'700' }}>{t('cart.title')}</Text>
    <FlatList data={items} keyExtractor={(i)=>i.id}
      renderItem={({item})=>(<View style={{ padding:16, borderRadius:12, backgroundColor:'#f5f5f5', marginBottom:8 }}>
        <Text style={{ fontWeight:'700' }}>{item.title}</Text>
        <Text>{item.priceCFA} XOF × {item.qty}</Text>
      </View>)}
    />
    <View style={{ gap:4 }}><Text>{t('cart.delivery')}: 2000 XOF</Text><Text>{t('cart.total')}: {total} XOF</Text></View>
    <Button title={t('cart.checkout')} onPress={()=>{}} />
  </View>);
}
