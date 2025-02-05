import React, {useCallback, useMemo, useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import {debounce} from 'lodash';

const SearchUsers = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async text => {
    if (!text) {
      setUsers([]);
      return;
    }
    console.log('fetch data');
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?name_like=${text}`,
      );
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchUsers = useMemo(() => debounce(fetchUsers, 500), []);

  const handleSearch = useCallback(
    async text => {
      setQuery(text);
      debouncedFetchUsers(text);
    },
    [debouncedFetchUsers],
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
