import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Loading from '../components/Loading';
import ProfileThumb from '../components/ProfileThumb';
import BackButton from '../components/BackButton';
import InfoCard from '../components/InfoCard';
import {fetchCredits} from '../fetching/fetchCredits';
import YoutubePlayer from 'react-native-youtube-iframe';
import firestore from '@react-native-firebase/firestore';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function moviedetail({navigation, route}) {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [director, setDirector] = useState('');
  const {movie} = route.params;
  const [videosData, setvideosData] = useState([]);

  const getVideos = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=103b9947c347bf75fef4757a1bb7e83e&language=en-US`);
        const json = await response.json();
       
        setvideosData(json.results);
        console.log(videosData);
    } catch (error) {
        console.error(error);
    }
};
const renderItem = ({ item }) => {
  if (item.type == 'Trailer') {
      return (
          <View style={{ height: 250, width: wp('100%'), marginTop: hp('2%') }}>
              <YoutubePlayer
                  height={500}
                  play={true}
                  videoId={item.key}>
              </YoutubePlayer>
          </View>
      )
  }
  else {
      return null;
  }

}

  useEffect(() => {
    setLoading(true);
    getVideos()
    fetchCredits(movie.id).then(data => {
      setCredits(data.credits);
      setDirector(data.director);
      setLoading(false);
    });
  }, []);


  return loading ? (
    <Loading />
  ) : (
    <ScrollView>
    <View style={styles.container}>
       
               

<View>
                        <FlatList
                            data={videosData}
                            renderItem={renderItem}
                            horizontal={true}>
                        </FlatList>
                    </View>
      <View>
        
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/w780${movie?.backdrop_path}`,
          }}
          style={styles.banner}
        />
        
        <InfoCard movie={movie} director={director} />
      </View>
      <View>

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
        
     
           
      
    </View>
    </ScrollView>
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
    backgroundColor: '#FFFFFF',
  },

  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
    lineargradient: {
    flex: 1,
},
});
