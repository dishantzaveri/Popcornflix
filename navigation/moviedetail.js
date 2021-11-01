import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Loading from '../components/Loading';
import ProfileThumb from '../components/ProfileThumb';
import BackButton from '../components/BackButton';
import InfoCard from '../components/InfoCard';
import {fetchCredits} from '../fetching/fetchCredits';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function moviedetail({navigation, route}) {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [director, setDirector] = useState('');
  const {movie} = route.params;
  // const [isFav, setisFav] = useState(false);
  // const movie_id = route.params.movie_id;
  // const item_title = route.params.title;
  // const release_path = route.params.release_path;
  // const poster_path = route.params.poster_path;
  

  // const addingFav = async () => {
  //   const ref = firestore().collection('Dishant');
  //   console.log(auth().currentUser.email);
  //   console.log(item_title);
  //   // console.log( movie_title);
  //   // console.log( release_path);
  //   // console.log(poster_path);
    
  //   // await ref.add({
    
  //   //   email: auth().currentUser.email,
  //   //   FavId: movie_id,
  //   //   FavTitle: movie_title,
  //   //   FavReleasePath: release_path,
  //   //   FavPosterPath: poster_path,
  //   // });
  // };

  

  useEffect(() => {
    setLoading(true);
    fetchCredits(movie.id).then(data => {
      setCredits(data.credits);
      setDirector(data.director);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <View>
        <BackButton navigation={navigation} />
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/w780${movie?.backdrop_path}`,
          }}
          style={styles.banner}
        />
        
        <InfoCard movie={movie} director={director} />
      </View>
      <View style={styles.credit}>
        <>

          <Text style={styles.title}>CAST</Text>
          {credits && (
            <FlatList
              data={credits.cast}
           
              renderItem={({item}) => <ProfileThumb item={item} />}
              horizontal
            />
          )}
        </>
        <>
          <Text style={styles.title}>CREW</Text>
          {credits && (
            <FlatList
              data={credits.crew}
         
              renderItem={({item}) => <ProfileThumb item={item} />}
              horizontal
            />
          )}
        </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {width: 450, height: 200},

  credit: {
    flex: 1,
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#212121',
  },

  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
