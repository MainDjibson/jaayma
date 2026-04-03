import { View, Text, StyleSheet } from 'react-native';
import { useApp } from '../../lib/appCtx';
import { useTranslation } from 'react-i18next';

export default function DashboardTab() {
  const { role } = useApp();
  const { t } = useTranslation();

  if (role === 'buyer') {
    return (
      <View style={styles.center}>
        <Text style={styles.locked}>{t('dashboard.no_access')}</Text>
      </View>
    );
  }

  const title =
    role === 'admin'
      ? t('dashboard.admin')
      : role === 'seller'
      ? t('dashboard.seller')
      : t('dashboard.ambassador');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.paragraph}>
        Ici tu pourras plus tard voir tes KPI (ventes, commissions, codes utilisés, etc.). Pour l’instant,
        c’est juste un écran de placeholder.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  locked: {
    fontSize: 16,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    padding: 16,
    gap: 12
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  },
  paragraph: {
    fontSize: 14,
    color: '#4b5563'
  }
});
