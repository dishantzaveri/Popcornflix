import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default getLatestMovies = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function getLatestMovies() {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=103b9947c347bf75fef4757a1bb7e83e&language=en-US&page=1',
      );
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getLatestMovies();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0c9" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          contentContainerStyle={{}}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color:'yellow',
                  fontStyle: 'italic',
                }}>
                {item.title}
              </Text>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('moviedetail', {movie: item})
                  }>
                  <ImageBackground
                    source={{
                      uri:
                        'https://image.tmdb.org/t/p/original/' +
                        item.poster_path,
                    }}
                    style={styles.image}></ImageBackground>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '700',
                  opacity: 0.7,
                  textAlign: 'center',
                  color: '#7fff00',
                }}>
                Released on ~ {item.release_date}
              </Text>
              <View
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <FontAwesome5
                  name={'heartbeat'}
                  size={30}
                  color={'red'}
                  onPress={() =>
                    Alert.alert(
                      'Thrilled you!',
                      'Go and check your heartbeat',
                      [{text: 'Okay'}],
                    )
                  }
                />
                <FontAwesome5
                  name={'hand-holding-heart'}
                  size={30}
                  color={'red'}
                  onPress={() =>
                    Alert.alert(
                      'Stole your heart!',
                      'Keep binging again anad again.',
                      [{text: 'Okay'}],
                    )
                  }
                />
                <FontAwesome5
                  name={'grin-hearts'}
                  size={30}
                  color={'red'}
                  onPress={() =>
                    Alert.alert(
                      'Woah!',
                      'Amazed you',
                      [{text: 'Okay'}],
                    )
                  }
                />
                <FontAwesome5
                  name={'heart-broken'}
                  size={30}
                  color={'red'}
                  onPress={() =>
                    Alert.alert(
                      'Bored you!',
                      'Added to disliked list',
                      [{text: 'Okay'}],
                    )
                  }
                />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    width: 300,
    height: 325,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  item: {
    flexBasis: '50%',
    marginHorizontal: 20,
    marginTop: 5,
    padding: 0,
    backgroundColor: 'black',
  },
});
