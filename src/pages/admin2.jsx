import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer';

const jsonData = [
  { id: 1, name: 'Alice', role: 'Admin', email: 'alice@example.com' },
  { id: 2, name: 'Bob', role: 'User', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', role: 'Editor', email: 'charlie@example.com' },
];

// Определяем стили
const styles = StyleSheet.create({
  page: { padding: 40 },
  header: { fontSize: 20, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
  section: { marginBottom: 15 },
  label: { fontWeight: 'bold', color: '#555' },
  value: { marginLeft: 8 },
});

// Создаём документ как React-компонент
const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>Список пользователей</Text>

      {jsonData.map((user, index) => (
        <View key={user.id} style={styles.section}>
          <Text>
            <Text style={styles.label}>№ {index + 1}: </Text>
            <Text>{user.name} ({user.role})</Text>
          </Text>
          <Text>
            <Text style={styles.label}>Email: </Text>
            <Text>{user.email}</Text>
          </Text>
        </View>
      ))}
    </Page>
  </Document>
);

const DownloadPDFButton = () => (
  <PDFDownloadLink
    document={<MyDocument />}
    fileName="users-list-styled.pdf"
  >
    {({ loading }) => (loading ? 'Генерация PDF...' : 'Скачать PDF')}
  </PDFDownloadLink>
);

export default DownloadPDFButton;