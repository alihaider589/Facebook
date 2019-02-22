import React, { Component } from 'react';
import { Image,TouchableOpacity,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon,Item, Left, Body, Right, Input } from 'native-base';
import back1 from './images/back1.jpg'
import {View,ScrollView} from 'react-native'
import first from './images/first.png'
import second from './images/second.jpg'
import third from './images/third.jpg'
import fifth from './images/fifth.png'
import sixth from './images/sixth.png'
import fourth from './images/fourth.jpg'
import watch1 from './images/watch1.jpg'
import watch2 from './images/watch2.jpg'
import watch3 from './images/watch3.jpg'
import watch4 from './images/watch4.jpg'
import watch5 from './images/watch5.jpg'
import watch6 from './images/watch6.jpg'
import firstthumb from './images/firstthumb.jpg'
import secondthumb from './images/secondthumb.jpg'
import thirdthumb from './images/thirdthumb.jpg'
import fourththumb from './images/fourththumb.jpg'
import fifththumb from './images/fifththumb.jpg'
import sixththumb from './images/sixththumb.jpg'



export default class Watch extends Component {
  render() {
    return (
      <Container>

<Card transparent>
<CardItem>
    <Left>
        <Text  style={{fontSize:20,fontFamily:'Roboto',fontWeight:'100',marginLeft:-10,marginBottom: 10,}}>
          Your watchlist
        </Text>
    </Left>
    <Right>
        <Text style={{color:'blue'}}>
            See All
        </Text>
    </Right>

</CardItem>


            </Card>

        <ScrollView>





          <ScrollView  horizontal={true}>
<TouchableOpacity>

<Image  style={styles.image} source={watch1}>

</Image>

</TouchableOpacity>

<TouchableOpacity>

<Image  style={styles.image} source={watch2}>
</Image>


</TouchableOpacity>

<TouchableOpacity>


<Image  style={styles.image} source={watch3}>
</Image>

</TouchableOpacity>


<TouchableOpacity>


<Image  style={styles.image} source={watch4}>
</Image>

</TouchableOpacity>

<TouchableOpacity>


<Image  style={styles.image} source={watch5}>
</Image>

</TouchableOpacity>

<TouchableOpacity>

<Image  style={styles.image} source={watch6}>
</Image>

</TouchableOpacity>



          </ScrollView>


          <Text style={styles.Text}>S</Text>


          <Text style={{fontSize:20,fontFamily:'Roboto',fontWeight:'bold'}}>Top Videos for you </Text>
          <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail style={styles.Thumbnail} source={first} />
                <Body>
                  <Text>New skins Comming to Fortnite?</Text>
                  <Text note>Fortnite parties</Text>
                 
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
             <Image source={firstthumb} style={{height: 200, width: null, flex: 1}}/>
     
            </CardItem>
            
          </Card>




         
       
          <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail style={styles.Thumbnail} source={fourth} />
                <Body>
                  <Text>Insane Elegy Kills in Grand theft auto online</Text>
                  <Text note>Gamesprout </Text>
                 
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
             <Image source={fourththumb} style={{height: 200, width: null, flex: 1}}/>
     
            </CardItem>
          </Card>
          </Content>

          <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail style={styles.Thumbnail} source={fifth} />
                <Body>
                  <Text>Battlefield 1 Amazing moments</Text>
                  <Text note>Gamers are Awesome</Text>
                 
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
             <Image source={fifththumb} style={{height: 200, width: null, flex: 1}}/>
     
            </CardItem>
          </Card>
          </Content>

          <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail style={styles.Thumbnail} source={sixth} />
                <Body>
                  <Text>Kids watching 18 hours of youtube perday?</Text>
                  <Text note>Facts </Text>
                 
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
             <Image source={sixththumb} style={{height: 200, width: null, flex: 1}}/>
     
            </CardItem>
          </Card>
          </Content>

        </Content>
        </ScrollView>
        </Container>

   );
  }
}

styles = StyleSheet.create({
image:{
    height:150,
    width:120,
    marginRight:5,
    marginLeft:5,
    marginTop:5,
    borderRadius:4

},
Text:{
    borderTopWidth:1,
    borderTopColor:'rgba(0,0,0,0.5)',
    color:'white',
    marginTop:5
},
Thumbnail:{

  height:30,
  width:30
}



})