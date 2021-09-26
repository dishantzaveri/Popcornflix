import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default getUpcomingMovies = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function getUpcomingMovies() {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=103b9947c347bf75fef4757a1bb7e83e&language=en-US&page=1',
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
    getUpcomingMovies();
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
                  fontSize: 30,
                  fontWeight: "bold",
                  textAlign: 'center',
                  color: 'white',
                }}>
                {item.title}
              </Text>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <ImageBackground
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/original/' + item.poster_path,
                  }}
                  style={styles.image}></ImageBackground>
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
                <FontAwesome5 name={'heartbeat'} size={30} color={'red'} />
                <FontAwesome5
                  name={'hand-holding-heart'}
                  size={30}
                  color={'red'}
                />
                <FontAwesome5 name={'grin-hearts'} size={30} color={'red'} />
                <FontAwesome5 name={'heart-broken'} size={30} color={'red'} />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  opacity: 0.8,
                  color: '#0099cc',
                  textAlign: 'center',
                }}>
                Popularity ~ {item.popularity}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '300',
                  opacity: 0.8,
                  color: 'yellow',
                  textAlign: 'center',
                }}>
                {item.overview}
              </Text>
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
    marginHorizontal: 10,
    marginTop: 10,
    padding: 5,
    backgroundColor: 'black',
  },
});
