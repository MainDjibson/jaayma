import { View, Image, Text, Pressable, Linking, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

type AdBannerProps = {
  imageUri: string;
  title: string;
  tagline: string;
  phone: string;
  email: string;
  linkUrl: string;
};

export default function AdBanner({ imageUri, title, tagline, phone, email, linkUrl }: AdBannerProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.wrap}>
      <Image source={{ uri: imageUri }} style={styles.img} />
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={2} style={styles.tagline}>
          {tagline}
        </Text>
        <View style={styles.btns}>
          <Pressable onPress={() => Linking.openURL(`tel:${phone}`)} style={styles.chip}>
            <Text style={styles.chipText}>{t('common.call')}</Text>
          </Pressable>
          <Pressable onPress={() => Linking.openURL(`mailto:${email}`)} style={styles.chip}>
            <Text style={styles.chipText}>{t('common.email')}</Text>
          </Pressable>
          <Pressable onPress={() => Linking.openURL(linkUrl)} style={styles.chip}>
            <Text style={styles.chipText}>{t('common.link')}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#0f172a',
    marginBottom: 16
  },
  img: {
    width: 120,
    height: 120
  },
  right: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 4
  },
  tagline: {
    color: '#e5e7eb',
    fontSize: 12
  },
  btns: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'white'
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0f172a'
  }
});
