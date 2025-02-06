import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import responsive from './responsive';

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    // Fetching data from Fake Store API
    const fetchData = async () => {
      const categoriesResponse = await fetch(
        'https://fakestoreapi.com/products/categories',
      );
      const categoriesData = await categoriesResponse.json();
      setCategories(categoriesData);

      const trendingResponse = await fetch('https://fakestoreapi.com/products');
      const trendingData = await trendingResponse.json();
      setTrendingItems(trendingData.slice(0, 5)); // Get first 5 products for trending

      const newArrivalsResponse = await fetch(
        'https://fakestoreapi.com/products',
      );
      const newArrivalsData = await newArrivalsResponse.json();
      setNewArrivals(newArrivalsData.slice(5, 15)); // Get next 10 products for new arrivals
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.box}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <Text style={styles.headerText}>Welcome to Our Store</Text>

        {/* Banner */}
        <Image
          source={{uri: 'https://picsum.photos/id/1/200/300'}}
          style={styles.bannerImage}
        />

        {/* Categories List */}
        <Text style={styles.sectionHeading}>Categories</Text>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>{item}</Text>
            </View>
          )}
          contentContainerStyle={styles.categoriesContainer}
        />

        {/* Trending Items */}
        <Text style={styles.sectionHeading}>Trending Items</Text>
        <FlatList
          data={trendingItems}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.trendingItem}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          )}
          contentContainerStyle={styles.trendingItemsContainer}
        />

        {/* New Arrivals (Vertical Grid List) */}
        <Text style={styles.sectionHeading}>New Arrivals</Text>
        <FlatList
          data={newArrivals}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.newArrivalItem}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          )}
          contentContainerStyle={styles.newArrivalsContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: responsive.padding(10),
  },
  headerText: {
    fontSize: responsive.fontSize(22),
    fontWeight: 'bold',
    marginBottom: responsive.margin(20),
    textAlign: 'center',
  },
  bannerImage: {
    width: '94%',
    alignSelf: 'center',
    height: responsive.height(150),
    borderRadius: responsive.borderRadius(10),
    marginBottom: responsive.margin(20),
  },
  sectionHeading: {
    fontSize: responsive.fontSize(18),
    fontWeight: 'bold',
    marginBottom: responsive.margin(10),
    marginTop: responsive.margin(20),
  },
  categoriesContainer: {
    marginBottom: responsive.margin(20),
  },
  categoryItem: {
    backgroundColor: '#007bff',
    paddingVertical: responsive.padding(8),
    paddingHorizontal: responsive.padding(15),
    marginRight: responsive.margin(10),
    borderRadius: responsive.borderRadius(10),
  },
  categoryText: {
    fontSize: responsive.fontSize(14),
    color: '#fff',
  },
  trendingItemsContainer: {
    marginBottom: responsive.margin(20),
  },
  trendingItem: {
    backgroundColor: '#fff',
    padding: responsive.padding(10),
    marginRight: responsive.margin(15),
    borderRadius: responsive.borderRadius(10),
    alignItems: 'center',
    width: responsive.width(180),
  },
  itemImage: {
    width: '100%',
    height: responsive.height(100),
    borderRadius: responsive.borderRadius(10),
    marginBottom: responsive.margin(10),
  },
  itemTitle: {
    fontSize: responsive.fontSize(14),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: responsive.fontSize(12),
    color: '#888',
    textAlign: 'center',
  },
  newArrivalsContainer: {
    marginBottom: responsive.margin(20),
  },
  newArrivalItem: {
    backgroundColor: '#fff',
    padding: responsive.padding(10),
    marginBottom: responsive.margin(15),
    borderRadius: responsive.borderRadius(10),
    alignItems: 'center',
    marginRight: responsive.margin(10),
    width: '47%',
  },
});

export default HomeScreen;
