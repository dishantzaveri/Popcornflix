<TouchableOpacity onPress={()=>{
                  setisOk((prev)=>!prev);
                  addingFav(
                    item.id,
                    item.title,
                    item.release_date,
                    item.poster_path,
                  );
                  Alert.alert('Added to favourites',
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

