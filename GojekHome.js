import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'pertama',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'kedua',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'ketiga',
  },
];

export default function GojekHome() {
  const renderItem = ({item}) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        borderBottomWidth: 1,
      }}>
      <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
        <Text style={{fontSize: 15, color: 'gray', fontWeight: 'bold'}}>
          GoPay top up
        </Text>
        <Text style={{fontSize: 16, color: 'gray', fontWeight: 'bold'}}>
          #2093774218741827
        </Text>
        <Text style={{fontSize: 12, color: 'gray'}}>9 April, 9.30 PM</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 12, color: 'green', fontWeight: 'bold'}}>
          Rp
        </Text>
        <Text style={{fontSize: 18, color: 'green', fontWeight: 'bold'}}>
          51.000
        </Text>
      </View>
    </View>
  );
  return (
    <View style={{display: 'flex', flex: 1, padding: 8}}>
      {/* Header */}
      <View
        style={{
          backgroundColor: '#0dabd6',
          height: 120,
          borderRadius: 10,
          padding: 15,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name="chevron-left" size={20} color="#fff" />
            <Entypo
              name="wallet"
              size={20}
              color="#fff"
              style={{marginHorizontal: 10}}
            />
            <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
              GoPay
            </Text>
          </View>
          <View>
            <Feather name="more-horizontal" size={20} color="#fff" />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              backgroundColor: '#fff',
              marginTop: 10,
            }}>
            <Image
              source={require('./avatar.jpeg')}
              width={50}
              height={50}
              style={{width: 50, height: 50, borderRadius: 100}}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
              }}>
              Don Ario Rafly
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: '#fff',
              }}>
              Tap to see your Gojek profile
            </Text>
          </View>
        </View>
      </View>

      {/* Body */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 48,
              width: 48,
              borderRadius: 100,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
            }}>
            <MCIcons name="arrow-up-box" size={25} color="#fff" />
          </View>
          <Text style={{fontSize: 12, color: '#000'}}>Pay</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 48,
              width: 48,
              borderRadius: 100,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
            }}>
            <MCIcons name="plus-box" size={25} color="#fff" />
          </View>
          <Text style={{fontSize: 12, color: '#000'}}>Top up</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 48,
              width: 48,
              borderRadius: 100,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
            }}>
            <MCIcons name="arrow-down-box" size={25} color="#fff" />
          </View>
          <Text style={{fontSize: 12, color: '#000'}}>Request</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 48,
              width: 48,
              borderRadius: 100,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
            }}>
            <IonIcons name="logo-google-playstore" size={23} color="#fff" />
          </View>
          <Text style={{fontSize: 12, color: '#000'}}>PayLater</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 48,
              width: 48,
              borderRadius: 100,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name="hand-holding-usd" size={20} color="#fff" />
          </View>
          <Text style={{fontSize: 12, color: '#000'}}>Cash out</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 48,
              width: 48,
              borderRadius: 100,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
            }}>
            <MCIcons name="wallet-plus" size={25} color="#fff" />
          </View>
          <Text style={{fontSize: 12, color: '#000'}}>Plus</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 48,
              width: 48,
              borderRadius: 100,
              backgroundColor: '#0dabd6',
              justifyContent: 'center',
            }}>
            <MCIcons name="clipboard-list-outline" size={25} color="#fff" />
          </View>
          <Text style={{fontSize: 12, color: '#000'}}>GoTagihan</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 48,
              width: 48,
            }}></View>
          <Text style={{fontSize: 12, color: '#000'}}></Text>
        </View>
      </View>

      {/* Content */}
      <View
        style={{
          backgroundColor: '#fff',
          borderColor: 'gray',
          borderStyle: 'solid',
          borderWidth: 2,
          height: 150,
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
            GoPay friends
          </Text>
          <Text style={{fontSize: 12, color: 'green', fontWeight: 'bold'}}>
            See more
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginLeft: 10,
            justifyContent: 'flex-start',
          }}>
          <Text style={{fontSize: 12, color: 'gray'}}>
            These are who you last sent or requested GoPay to.
          </Text>
          <Text style={{fontSize: 12, color: 'gray'}}>
            Tap their name to send again.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                backgroundColor: 'oldlace',
                marginTop: 10,
              }}>
              <Image
                source={require('./avatar.jpeg')}
                width={50}
                height={50}
                style={{width: 50, height: 50, borderRadius: 100}}
              />
            </View>
            <Text style={{fontSize: 12, color: 'gray'}}>Farrel</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                backgroundColor: 'oldlace',
                marginTop: 10,
              }}>
              <Image
                source={require('./avatar.jpeg')}
                width={50}
                height={50}
                style={{width: 50, height: 50, borderRadius: 100}}
              />
            </View>
            <Text style={{fontSize: 12, color: 'gray'}}>Jasmine</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                backgroundColor: 'oldlace',
                marginTop: 10,
              }}>
              <Image
                source={require('./avatar.jpeg')}
                width={50}
                height={50}
                style={{width: 50, height: 50, borderRadius: 100}}
              />
            </View>
            <Text style={{fontSize: 12, color: 'gray'}}>Yuri Kel</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                marginTop: 10,
              }}></View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                marginTop: 10,
              }}></View>
          </View>
        </View>
      </View>

      {/* History */}
      <View
        style={{
          display: 'flex',
          height: 138,
          borderRadius: 10,
          padding: 10,
          justifyContent: 'space-between',
          overflow: 'scroll',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
            History
          </Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      {/* Footer */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'whitesmoke',
          borderRadius: 10,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 25,
              width: 25,
              borderRadius: 100,
              justifyContent: 'center',
            }}>
            <AntDesign name="home" size={20} color="#000" />
          </View>
          <Text style={{fontSize: 11, color: '#000'}}>Home</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 25,
              width: 25,
              borderRadius: 100,
              justifyContent: 'center',
            }}>
            <Feather name="activity" size={20} color="#000" />
          </View>
          <Text style={{fontSize: 11, color: '#000'}}>Activity</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 25,
              width: 25,
              borderRadius: 100,
              justifyContent: 'center',
            }}>
            <Entypo name="chat" size={20} color="#000" />
          </View>
          <Text style={{fontSize: 11, color: '#000'}}>Chat</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: 25,
              width: 25,
              borderRadius: 100,
              justifyContent: 'center',
            }}>
            <IonIcons name="person-circle-outline" size={23} color="#000" />
          </View>
          <Text style={{fontSize: 11, color: '#000'}}>Profile</Text>
        </View>
      </View>
    </View>
  );
}
