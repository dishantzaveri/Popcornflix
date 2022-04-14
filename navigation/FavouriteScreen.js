import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const FavouriteScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [isFav, setisFav] = useState(false);
  const [isGood, setisGood] = useState(false);
  const [isBad, setisBad] = useState(false);
  const [isOk, setisOk] = useState(false);

  useEffect(() => {
    getFavourites();
  }, []);
  const user = [];
  const getFavourites = async () => {
    const userRef = firestore()
      .collection('Dishant')
      .where('email', '==', auth().currentUser.email);
    userRef.onSnapshot(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        user.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setUsers(user);
      console.log(users);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.key}
        contentContainerStyle={{}}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'yellow',
                fontStyle: 'italic',
              }}></Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.item}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'yellow',
                    fontStyle: 'italic',
                  }}>
                  {item.FavTitle}
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
                          item.FavPosterPath,
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
                  Released on ~ {item.FavReleaseDate}
                </Text>

                <View
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={()=>{
                  setisOk((prev)=>!prev);
                  Alert.alert('Already added to favourites',
                  'Glad to know you liked it',[{text: 'Okay'}])
                      }}>
                  {
                    isOk ? <FontAwesome5
                    name={'hand-holding-heart'}
                    size={30}
                    color='red'>

                    </FontAwesome5> : <FontAwesome5
                    name={'hand-holding-heart'}
                    size={30}
                    color='white'></FontAwesome5>
                  }
                  </TouchableOpacity>



                  <TouchableOpacity
            onPress={() => {
              setisFav(prev => !prev);
              Alert.alert('Stole your heart!', 'Check your heartbeat!', [
                {text: 'Okay'},
              ]);
            }}>
            {isFav ? (
              <FontAwesome5
                name={'heartbeat'}
                size={30}
                color="red"></FontAwesome5>
            ) : (
              <FontAwesome5
                name="heartbeat"
                size={30}
                color="white"></FontAwesome5>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setisGood(prev => !prev);
              Alert.alert('Woah!', 'Amazed you', [{text: 'Okay'}]);
            }}>
            {isGood ? (
              <FontAwesome5
                name={'grin-hearts'}
                size={30}
                color="red"></FontAwesome5>
            ) : (
              <FontAwesome5
                name="grin-hearts"
                size={30}
                color="white"></FontAwesome5>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setisBad(prev => !prev);
              Alert.alert('Bored you!', 'Added to disliked list', [
                {text: 'Okay'},
              ]);
            }}>
            {isBad ? (
              <FontAwesome5
                name={'heart-broken'}
                size={30}
                color="red"></FontAwesome5>
            ) : (
              <FontAwesome5
                name="heart-broken"
                size={30}
                color="white"></FontAwesome5>
            )}
          </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
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

export default FavouriteScreen;
