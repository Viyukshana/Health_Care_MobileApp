// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, TextInput, ActivityIndicator, RefreshControl, TouchableOpacity, Linking } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { fetchHealthNews } from '../../services/newsApiService'; // Import the API service

// const HomeScreen = ({ route }) => {
//   const { username = 'Guest' } = route.params || {};
//   const [news, setNews] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredNews, setFilteredNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   const navigation = useNavigation();

//   const loadNews = async () => {
//     setLoading(true);
//     try {
//       const articles = await fetchHealthNews();
//       setNews(articles);
//       setFilteredNews(articles);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     if (!text) {
//       setFilteredNews(news);
//     } else {
//       const filtered = news.filter((item) =>
//         item.title.toLowerCase().includes(text.toLowerCase()) ||
//         item.description.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredNews(filtered);
//     }
//   };

//   const renderNewsCard = ({ item }) => (
//     <TouchableOpacity
//       className="bg-white shadow rounded-lg p-4 mb-4"
//       onPress={() => Linking.openURL(item.url)}
//     >
//       <Image source={{ uri: item.imageUrl }} className="w-full h-40 rounded-lg mb-4" />
//       <Text className="text-lg font-bold text-gray-800">{item.title}</Text>
//       <Text className="text-sm text-gray-600 mt-1">{item.publishedAt}</Text>
//       <Text className="text-gray-700 mt-2">{item.description}</Text>
//     </TouchableOpacity>
//   );

//   useEffect(() => {
//     loadNews();
//   }, []);

//   return (
//     <View className="flex-1 bg-gray-100">
//       {/* Welcome Message */}
//       <Text className="text-2xl font-bold text-center text-blue-600 mt-4">Welcome, {username}!</Text>

//       {/* Search Bar */}
//       <View className="flex-row items-center bg-white rounded-md shadow m-4 px-4 py-2">
//         <TextInput
//           className="flex-1 text-lg"
//           placeholder="Search news..."
//           value={searchQuery}
//           onChangeText={handleSearch}
//         />
//       </View>

//       {/* News List */}
//       {loading ? (
//         <ActivityIndicator size="large" color="#4A90E2" className="mt-4" />
//       ) : (
//         <FlatList
//           data={filteredNews}
//           renderItem={renderNewsCard}
//           keyExtractor={(item) => item.id}
//           refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadNews} />}
//           contentContainerStyle={{ paddingHorizontal: 16 }}
//         />
//       )}

//       {/* Bottom Navigation */}
//       <View className="flex-row justify-between bg-white py-4 px-6 border-t border-gray-200">
//         <TouchableOpacity onPress={() => navigation.navigate('Home')} className="items-center">
//           <Image source={require('../../../../assets/images/home.png')} className="w-6 h-6 mb-1" />
//           <Text className="text-sm text-blue-600">Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Profile')} className="items-center">
//           <Image source={require('../../../../assets/images/icon -profile.png')} className="w-6 h-6 mb-1" />
//           <Text className="text-sm text-blue-600">Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Category')} className="items-center">
//           <Image source={require('../../../../assets/images/category.png')} className="w-6 h-6 mb-1" />
//           <Text className="text-sm text-blue-600">Category</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Settings')} className="items-center">
//           <Image source={require('../../../../assets/images/settings.png')} className="w-6 h-6 mb-1" />
//           <Text className="text-sm text-blue-600">Settings</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;


import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchHealthNews } from '../../services/newsApiService'; // Import the API service
import { LinearGradient } from 'expo-linear-gradient'; // Install this package if not already installed

const HomeScreen = ({ route }) => {
  const { username = 'Guest' } = route.params || {};
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const loadNews = async () => {
    setLoading(true);
    try {
      const articles = await fetchHealthNews();
      setNews(articles);
      setFilteredNews(articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (!text) {
      setFilteredNews(news);
    } else {
      const filtered = news.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredNews(filtered);
    }
  };

  const renderNewsCard = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
      }}
      onPress={() => Linking.openURL(item.url)}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={{
          width: '100%',
          height: 150,
          borderRadius: 8,
          marginBottom: 12,
        }}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>{item.title}</Text>
      <Text style={{ fontSize: 12, color: '#888', marginVertical: 4 }}>{item.publishedAt}</Text>
      <Text style={{ fontSize: 14, color: '#555' }}>{item.description}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <LinearGradient
      colors={['#e0f7fa', '#80deea']}
      style={{ flex: 1, paddingTop: 16 }}
    >
      {/* Welcome Message */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#00796b',
          marginBottom: 16,
        }}
      >
        Welcome, {username}!
      </Text>

      {/* Search Bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 8,
          marginHorizontal: 16,
          padding: 8,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <TextInput
          style={{ flex: 1, fontSize: 16, color: '#333' }}
          placeholder="Search news..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* News List */}
      {loading ? (
        <ActivityIndicator size="large" color="#00796b" style={{ marginTop: 16 }} />
      ) : (
        <FlatList
          data={filteredNews}
          renderItem={renderNewsCard}
          keyExtractor={(item) => item.id}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadNews} />}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        />
      )}

      {/* Bottom Navigation */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#fff',
          paddingVertical: 8,
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ alignItems: 'center' }}>
          <Image source={require('../../../../assets/images/home.png')} style={{ width: 24, height: 24, marginBottom: 4 }} />
          <Text style={{ fontSize: 12, color: '#00796b' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ alignItems: 'center' }}>
          <Image source={require('../../../../assets/images/icon -profile.png')} style={{ width: 24, height: 24, marginBottom: 4 }} />
          <Text style={{ fontSize: 12, color: '#00796b' }}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Category')} style={{ alignItems: 'center' }}>
          <Image source={require('../../../../assets/images/category.png')} style={{ width: 24, height: 24, marginBottom: 4 }} />
          <Text style={{ fontSize: 12, color: '#00796b' }}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ alignItems: 'center' }}>
          <Image source={require('../../../../assets/images/settings.png')} style={{ width: 24, height: 24, marginBottom: 4 }} />
          <Text style={{ fontSize: 12, color: '#00796b' }}>Settings</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
