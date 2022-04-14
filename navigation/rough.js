// import React, {useEffect, useState} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   TextInput,
//   Dimensions,
//   ScrollView,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Loading from '../components/Loading';
// import ProfileThumb from '../components/ProfileThumb';
// import BackButton from '../components/BackButton';
// import InfoCard from '../components/InfoCard';
// import {fetchCredits} from '../fetching/fetchCredits';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import YoutubePlayer from 'react-native-youtube-iframe';
// import firestore from '@react-native-firebase/firestore';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// export default function moviedetail({navigation, route}) {
//   const [credits, setCredits] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [director, setDirector] = useState('');
//   const {movie} = route.params;
//   const [videosData, setvideosData] = useState([]);
//   // const [isFav, setisFav] = useState(false);
//   // const item_title = route.params.title;
//   // const release_path = route.params.release_path;
//   // const poster_path = route.params.poster_path;
  

//   // const addingFav = async () => {
//   //   const ref = firestore().collection('Dishant');
//   //   console.log(auth().currentUser.email);
//   //   console.log(item_title);
//   //   // console.log( movie_title);
//   //   // console.log( release_path);
//   //   // console.log(poster_path);
    
//   //   // await ref.add({
    
//   //   //   email: auth().currentUser.email,
//   //   //   FavId: movie_id,
//   //   //   FavTitle: movie_title,
//   //   //   FavReleasePath: release_path,
//   //   //   FavPosterPath: poster_path,
//   //   // });
//   // };

//   const getVideos = async () => {
//     try {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=103b9947c347bf75fef4757a1bb7e83e&language=en-US`);
//         const json = await response.json();
       
//         setvideosData(json.results);
//         console.log(videosData);
//     } catch (error) {
//         console.error(error);
//     }
// };
// const renderItem = ({ item }) => {
//   if (item.type == 'Trailer') {
//       return (
//           <View style={{ height: 250, width: wp('100%'), marginTop: hp('2%') }}>
//               <YoutubePlayer
//                   height={500}
//                   play={true}
//                   videoId={item.key}>
//               </YoutubePlayer>
//           </View>
//       )
//   }
//   else {
//       return null;
//   }

// }

//   useEffect(() => {
    
//     setLoading(true);
//     fetchCredits(movie.id).then(data => {
//       setCredits(data.credits);
//       setDirector(data.director);
//       setLoading(false);
      
//     });
//   }, []);

//   useEffect(async () => {
//     await getVideos();
// }, []);


//   return (
 
//     <View style={styles.container}>
//         <LinearGradient colors={['#26867c', '#33b3a6', '#88DCE6']}
//                 style={styles.lineargradient}
//                 end={{ x: 0, y: 0.7 }}>
//                 <ScrollView>
               
//                     <View>
//                         <FlatList
//                             data={videosData}
//                             renderItem={renderItem}
//                             horizontal={true}>
//                         </FlatList>
//                     </View>
                   
                       
                        
                           
                       
         
                   
                  
               
//                 </ScrollView>
//             </LinearGradient>
    
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   banner: {width: 450, height: 200},

//   credit: {
//     flex: 1,
//     padding: 10,
//   },

//   container: {
//     flex: 1,
//     backgroundColor: '#212121',
//   },
//   lineargradient: {
//     flex: 1,
// },

//   title: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
