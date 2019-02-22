import React, { Component } from 'react';
import { Image,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon,Item, Left, Body, Right, Input } from 'native-base';
import back1 from './images/back1.jpg'
import {View,ScrollView} from 'react-native'
import search from './images/search.png'
import noti from './images/notithumb.png'
import like from './images/like.png'
import comment from './images/comment.png'
import share from './images/share.png'
import love from './images/love.png'
import likke from './images/likke.png'
import haha from './images/haha.png'


export default class CardImageExample extends Component {
  render() {
    return (
      <Container>


        
<Header hasTabs style={{backgroundColor:'white'}} >
        <Content>

          <Item>
<Thumbnail source={require('./images/profilepic.jpg')}style={{height:40,width:40}}></Thumbnail>
            <Input style={{color:'black',marginLeft:5,fontFamily:'Roboto',borderWidth:1,borderRadius:20,fontSize:15,height:40,marginTop:10}} placeholder='      Whats on your mind?' placeholderTextColor="black"/>
            <Icon source={back1}></Icon>
          
          </Item>
        </Content>
   
        </Header>


        <ScrollView>
        <Text style={{borderTopWidth:15,borderTopColor:'rgb(220, 222, 227)',color:'rgb(220, 222, 227)'}}>S</Text>

 <Text >Stories</Text>
          <ScrollView  horizontal={true} >
<TouchableOpacity>

<Image  style={{height:100,width:80,marginRight:5,marginLeft:5,marginTop:5}} source={require('./images/Ali.jpg')}>

</Image>

</TouchableOpacity>

<TouchableOpacity>

<Image  style={{height:100,width:80,marginRight:5,marginLeft:5,marginTop:5,borderRadius:5}} source={require('./images/story1.jpg')}>

</Image>

</TouchableOpacity>

<TouchableOpacity>

<Image  style={{height:100,width:80,marginRight:5,marginLeft:5,marginTop:5}} source={require('./images/story2.jpg')}>

</Image>

</TouchableOpacity>


<TouchableOpacity>

<Image  style={{height:100,width:80,marginRight:5,marginLeft:5,marginTop:5}} source={require('./images/story3.jpg')}>

</Image>

</TouchableOpacity>

<TouchableOpacity>

<Image  style={{height:100,width:80,marginRight:5,marginLeft:5,marginTop:5}} source={require('./images/story4.jpg')}>

</Image>

</TouchableOpacity>

<TouchableOpacity>

<Image  style={{height:100,width:80,marginRight:5,marginLeft:5,marginTop:5}} source={require('./images/story5.jpg')}>

</Image>

</TouchableOpacity>


          </ScrollView>
        <Text style={{borderTopWidth:15,
          borderTopColor:'rgb(220, 222, 227)',
          color:'rgb(220, 222, 227)',
          marginTop:10
          }}>S</Text>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./images/mdthumb.jpg')}/>
                <Body>
                  <Text><Text style={{fontWeight:'bold'}}>MD Hussain</Text>    Updated his profile picture</Text>
                  <Text note>Just Now<Image  source={noti} style={{height:30,width:30}}/></Text>
                 
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
             <Image source={require('./images/mdthumb.jpg')}style={{height: 200, width: null, flex: 1}}/>
     
            </CardItem>

<View style={{flexDirection:'row'}}>

<Image   style={{
  height:20,
  width:20,
  marginRight:-4,
  marginTop:12
  }} 
  source={haha}
  />
<Image style={{height:30,
  width:30,
  marginLeft:1,
  marginTop:7
  }}
   source={love
   }/>
<Image  style={{height:35,
  width:35,
  marginLeft:-10,
  marginTop:5
  }} 
  source={likke}/>
<Text style={{marginTop:12}}>7</Text>
</View>
<Text style={{marginTop:-24}} >                                      2 Comments ° 1 Shares </Text>
            <CardItem>

              <Left>
                <Button transparent>
                <Image style={{height:30,width:30}} source={like}/>
              
                  <Text style={{color:'rgb(157, 161, 167)',marginRight:5,fontSize:10}}>Like</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <Image style={{height:30,width:30}} source={comment}/>

                  <Text style={{color:'rgb(157, 161, 167)',marginRight:5,fontSize:10}}>Comment</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                <Image style={{height:30,width:30}} source={share}/>

                  <Text style={{color:'rgb(157, 161, 167)',marginLeft:5,fontSize:10}}>share</Text>
                </Button>
                </Right>
            </CardItem>
          </Card>
        </Content>

        <Text style={{borderTopWidth:15,
          borderTopColor:'rgb(220, 222, 227)',
          color:'rgb(220, 222, 227)',
          marginTop:10
          }}>
          S
          </Text>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./images/bilalthumb.jpg')} />
                <Body>
                  <Text>Bilal Nadeem</Text>
                  <Text note>Yesterday at 10:20 <Image  source={noti} style={{height:30,width:30}}/></Text>
                 
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
             <Image source={require('./images/bilalpost.jpg')} style={{height: 200, width: null, flex: 1}}/>
     
            </CardItem>

<View style={{flexDirection:'row'}}>


<Image style={{height:30,width:30,marginLeft:1,marginTop:7}} source={love}/>
<Image  style={{height:35,width:35,marginLeft:-10,marginTop:5}} source={likke}/>
<Text style={{marginTop:12}}>59</Text>
</View>
<Text style={{marginTop:-24}} >                                      59 Comments ° 145 Shares </Text>
            <CardItem>

              <Left>
                <Button transparent>
                <Image style={{height:30,width:30}} source={like}/>
              
                  <Text style={{color:'rgb(157, 161, 167)',marginRight:5,fontSize:10}}>Like</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <Image style={{height:30,width:30}} source={comment}/>

                  <Text style={{color:'rgb(157, 161, 167)',marginRight:5,fontSize:10}}>Comment</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                <Image style={{height:30,width:30}} source={share}/>

                  <Text style={{color:'rgb(157, 161, 167)',marginLeft:5,fontSize:10}}>share</Text>
                </Button>
                </Right>
            </CardItem>
          </Card>
        </Content>

        <Text style={{borderTopWidth:15,borderTopColor:'rgb(220, 222, 227)',color:'rgb(220, 222, 227)',marginTop:10}}>S</Text>

       

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./images/asadthumb.jpg')} />
                <Body>
                  <Text>Muhammad Asad</Text>
                  <Text note>3 June at 00:00 <Image  source={noti} style={{height:30,width:30}}/></Text>
                 
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
             <Image source={require('./images/asadpost.jpg')} style={{height: 200, width: null, flex: 1}}/>
     
            </CardItem>

<View style={{flexDirection:'row'}}>


<Image style={{height:30,
  width:30,
  marginLeft:1,
  marginTop:7
  }} source={love}/>
<Image  style={{height:35,
  width:35,
  marginLeft:-10,
  marginTop:5
  }} source={likke}/>
<Text style={{marginTop:12}}>44</Text>
</View>
<Text style={{marginTop:-24}} >                                      2 Comments ° 1 Shares </Text>
            <CardItem>

              <Left>
                <Button transparent>
                <Image style={{height:30,width:30}} source={like}/>
              
                  <Text style={{color:'rgb(157, 161, 167)',
                  marginRight:5,
                  fontSize:10
                  }}>Like</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <Image style={{
                  height:30,
                  width:30
                  }} source={comment}/>

                  <Text style={{color:'rgb(157, 161, 167)',
                  marginRight:5,
                  fontSize:10}}>Comment</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                <Image style={{height:30,width:30}} source={share}/>

                  <Text style={{color:'rgb(157, 161, 167)',
                  marginLeft:5,
                  fontSize:10
                  }}>share</Text>
                </Button>
                </Right>
            </CardItem>
          </Card>
        </Content>
        <Button style={{
           marginTop:20,
       width:"90%",
       marginLeft:25,
       height:30,
       marginBottom:10,
       backgroundColor:'rgb(235, 237, 240)',
       borderRadius:5
       }} > 
       <Text style={{color:'black'}}>

See More Posts
       </Text>
       
       </Button>

        </ScrollView>
      </Container>
    );
  }
}