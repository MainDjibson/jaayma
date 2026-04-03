import { View, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
const mockFavs = [{id:'1', title:'Produit A', priceCFA:2500},{id:'2', title:'Produit B', priceCFA:5000}];
export default function Wishlist(){
  const { t } = useTranslation();
  return (
    <View style={{ flex:1, padding:16 }}>
      <Text style={{ fontSize:18, fontWeight:'700', marginBottom:8 }}>{t('wishlist.title')}</Text>
      <FlatList data={mockFavs} keyExtractor={(i)=>i.id} ListEmptyComponent={<Text>{t('wishlist.empty')}</Text>}
        renderItem={({item})=>(<View style={{ padding:16, borderRadius:12, backgroundColor:'#f5f5f5', marginBottom:8 }}>
          <Text style={{ fontWeight:'700' }}>{item.title}</Text><Text>{item.priceCFA} XOF</Text>
        </View>)}
      />
    </View>
  );
}
