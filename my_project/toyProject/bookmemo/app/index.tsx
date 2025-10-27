import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { axiosBooks } from '../api/publicApi'; // 파일 경로에 맞게 수정

const clientId = process.env.EXPO_PUBLIC_CLIENT_ID;
const clientSecret = process.env.EXPO_PUBLIC_CLIENT_SECRET;

export default function App() {
  const [query, setQuery] = useState('자바스크립트');
  const [books, setBooks] = useState([]);
  const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  item: {
    marginBottom: 15,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  author: {
    marginTop: 5,
    fontStyle: 'italic',
  },
});

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await axiosBooks(query);
        setBooks(data.items);
      } catch (error) {
        console.error('책 정보 불러오기 실패:', error);
      }
    };

    fetchBooks();
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="검색어 입력"
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title.replace(/<[^>]+>/g, '')}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        )}
      />
    </View>
  );
}
