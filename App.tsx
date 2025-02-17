import React, {useState, useCallback, useMemo} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {debounce} from 'lodash';
import axios from 'axios';

const SearchUsers = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch users from API
  const fetchUsers = async (searchQuery: string) => {
    if (!searchQuery) {
      setUsers([]);
      return;
    }
    setLoading(true);
    console.log('fetchmore');
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?name_like=${searchQuery}`,
      );
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Debounce function defined inside `useMemo` so it's created only once
  const debouncedFetchUsers = useMemo(() => debounce(fetchUsers, 500), []);

  // ✅ useCallback to avoid re-creating the function on each render
  const handleSearch = useCallback(
    (text: string) => {
      setQuery(text);
      debouncedFetchUsers(text);
    },
    [debouncedFetchUsers], // Make sure it uses the memoized debounce function
  );

  return (
    <SafeAreaView style={{padding: 20}}>
      <TextInput
        placeholder="Search users..."
        value={query}
        onChangeText={handleSearch}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />

      {loading && <ActivityIndicator size="large" />}

      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Text
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
            }}>
            {item.name}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default SearchUsers;
