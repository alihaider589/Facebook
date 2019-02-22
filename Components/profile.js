import React, { Component } from 'react';
import { Image,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon,Item, Left,List,ListItem, Body, Right, Input } from 'native-base';
import {View,ScrollView} from 'react-native'
import liveevent from './images/liveevent.png'
import live from './images/live.png'
import about from './images/about.jpg'
import about1 from './images/about1.jpg'
import about3 from './images/about3.jpg'
import plus from './images/plus.png'
import edit from './images/edit.png'
import activity from './images/activity.png'
import more from './images/more.png'
import profilepic from './images/profilepic.jpg'
import game from './images/game.png'
import graduate from './images/graduate.png'
import location from './images/location.png'
import time from './images/time.png'
import notithumb from './images/notithumb.png'
import love from './images/love.png'
import likke from './images/likke.png'
import like from './images/like.png'
import comment from './images/comment.png'
import share from './images/share.png'
import photos from './images/photos.png'


export default class profile extends Component {
  render() {
    return (
      <Container>
          <ScrollView >
<Image style={{height:200,width:400,}} source={require('./images/cover.jpg')}/>
<Thumbnail  style={{marginLeft:120,
  height:130,
  width:130,
  marginTop:-80,
  borderRadius:80,
  borderWidth:5,
  borderColor:'rgb(255, 255, 255)'}} source={require('./images/profilepic.jpg')}>
</Thumbnail>
<Text style={{color:'black',
fontSize:24,
fontWeight:"bold",
fontFamily: 'Roboto',
marginLeft: 125,
marginTop: 10,
}}> Ali Haider</Text>
<Text style={{color:'black',fontSize:15,fontFamily: 'Roboto',marginLeft: 90,marginTop: 10,}}>{`           Being Happy \n Never goes out of style `}</Text>
<View style={{flexDirection:'row'}}>

<Button
 rounded 
 bordered
  style={{marginLeft:10,
  height:50,
  width:50,
  borderColor:'white',
  marginTop:20,
  backgroundColor:'rgb(235, 237, 240)'}}>
<Image source={plus} 
 style={{height:20,
 width:20,
 marginLeft:15
 }}/>
</Button>
<Text 
style={{
  marginTop:70,
marginLeft:-55,
fontSize:15,
fontFamily:'Roboto'
}}>Add to story
</Text>



<Button 
rounded 
bordered 
style={{marginLeft:10,
height:50,
width:50,
borderColor:'white'
,marginTop:20,
backgroundColor:'rgb(235, 237, 240)'
}}>
<Image source={edit}  style={{height:20,width:20,marginLeft:15}}/>
</Button>
<Text style={{marginTop:70,marginLeft:-55,fontSize:15,fontFamily:'Roboto'}}>Edit Profile</Text>



<Button rounded bordered style={{marginLeft:10,height:50,width:50,borderColor:'white',marginTop:20,backgroundColor:'rgb(235, 237, 240)'}}>
<Image source={activity}  style={{height:20,width:20,marginLeft:15}}/>
</Button>
<Text style={{marginTop:70,marginLeft:-50,fontSize:15,fontFamily:'Roboto'}}>Activity Log</Text>



<Button rounded bordered style={{marginLeft:10,height:50,width:50,borderColor:'white',marginTop:20,backgroundColor:'rgb(235, 237, 240)'}}>
<Image source={more}  style={{height:20,width:20,marginLeft:15}}/>
</Button>
<Text style={{marginTop:70,marginLeft:-40,fontSize:15,fontFamily:'Roboto'}}>More</Text>

</View>

<View style={{marginTop:20}}>
<List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square  style={{height:30,width:30}}  source={game} />
              </Left>
              <Body>
                <Text>Gamers at <Text style={{fontWeight:'bold'}}> Grand Theft Auto Online</Text></Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
            

            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:30,width:30}} source={game} />
              </Left>
              <Body>
                <Text>Gamers at <Text style={{fontWeight:'bold'}}> Counter Strike:Global Offensive</Text></Text>
              </Body>
              <Right>
              </Right>
            </ListItem>


            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:30,width:30}} source={graduate} />
              </Left>
              <Body>
                <Text>Studies at <Text style={{fontWeight:'bold'}}> Sindh Madressatul Islam University</Text></Text>
              </Body>
              <Right>
              </Right>
            </ListItem>


            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:30,width:30}} source={graduate} />
              </Left>
              <Body>
                <Text>Went to <Text style={{fontWeight:'bold'}}>D.J. Sindh Govt. Science College</Text></Text>
              </Body>
              <Right>
              </Right>
            </ListItem>

            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:30,width:30}} source={location} />
              </Left>
              <Body>
                <Text>Lives at <Text style={{fontWeight:'bold'}}> Karachi,Pakistan</Text></Text>
              </Body>
              <Right>
              </Right>
            </ListItem>

            
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:30,width:30}} source={time} />
              </Left>
              <Body>
                <Text>Joined June 2012</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>


       </List>
       </View>

       <Card>

       
       <CardItem cardBody>
             <Image source={about} style={{height: 300, width:150, flex: 1,marginLeft:10,marginRight:10}}/>
     </CardItem>              
           
       </Card>

       <Button style={{
           marginTop:20,
       width:"85%",
       marginLeft:25,
       height:30,
       marginBottom:10,
       backgroundColor:'rgb(235, 237, 240)',
       borderRadius:5
       }} > 
       <Text style={{color:'black'}}>


       See more about yourself
       </Text>
       
       </Button>
       <Text style={{
       borderBottomColor:'rgba(0,0,0,0.3)',
       borderRadius:50,
       marginTop:10,
       marginBottom:20,
       borderBottomWidth:3,
       color:'white'}}>
       0
       </Text>

       <View>

        <Content>
            <Card transparent>
<CardItem>
    <Left>
        <Text >
            Photos
        </Text>
    </Left>
    <Right>
        <Text style={{color:'blue'}}>
            Add Photo
        </Text>
    </Right>

</CardItem>


            </Card>
          
        </Content>
        
       <Card>

       
<CardItem cardBody>
      <Image source={about1} style={{height: 300, width:150, flex: 1,marginLeft:10,marginRight:10}}/>
</CardItem>              
    
</Card>

<Button style={{
           marginTop:20,
       width:"85%",
       marginLeft:25,
       height:30,
       marginBottom:10,
       backgroundColor:'rgb(235, 237, 240)',
       borderRadius:5
       }} > 
       <Text style={{color:'black'}}>

Add More Photos
       </Text>
       
       </Button>
      



        </View>


        <Text style={{
       borderBottomColor:'rgba(0,0,0,0.3)',
       borderRadius:50,
       marginTop:10,
       marginBottom:20,
       borderBottomWidth:3,
       color:'white'}}>
       0
       </Text>

       <View>

        <Content>
            <Card transparent>
<CardItem>
    <Left>
        <Text style={{fontWeight:'bold',fontSize:20,fontFamily:'Roboto'}} >
        {`Friends \n`}
        </Text>
        <Text style={{marginLeft:-80}}>{`\n 1,334 friends`}</Text>
    </Left>
    <Right>
        <Text style={{color:'blue'}}>
            Add Photo
        </Text>
    </Right>

</CardItem>


            </Card>
            <Card>

       
<CardItem cardBody>
      <Image source={about3} style={{height: 300, width:150, flex: 1,marginLeft:10,marginRight:10}}/>
</CardItem>              
    
</Card>


<Button style={{
           marginTop:20,
       width:"85%",
       marginLeft:25,
       height:30,
       marginBottom:10,
       backgroundColor:'rgb(235, 237, 240)',
       borderRadius:5
       }} > 
       <Text style={{color:'black'}}>

See All Friends
       </Text>
       
       </Button>
      <Text style={{borderBottomColor:'grey',borderTopColor:'rgba(0,0,0,0.3)',borderTopWidth:1 ,marginBottom:-20,color:'white'}}>o</Text>


       <Card transparent>
<CardItem>
    <Left>
    <Text style={{fontSize:20,fontWeight:'bold',fontFamily:'Roboto'}} >
     Did you know
 </Text>
</Left>
<Right>
 <Text style={{color:'blue',fontSize:15,fontFamily:'Roboto'}}>
     Add Answer
 </Text>
    </Right>

</CardItem>


            </Card>
            <Text style={{borderBottomColor:'grey',borderTopColor:'rgba(0,0,0,0.3)',borderTopWidth:1 ,marginBottom:-20,color:'white'}}>o</Text>
          

<Card transparent>
<CardItem>
<Left>
 <Text style={{fontSize:20,fontWeight:'bold',fontFamily:'Roboto'}} >
     Story Highlights
 </Text>
</Left>
<Right>
 <Text style={{color:'blue',fontSize:15,fontFamily:'Roboto'}}>
     Add New
 </Text>
</Right>

</CardItem>


     </Card>

     <Card style={{width:'100%'}}>
            <CardItem>
                <Left>
                    <Text style={{fontSize:20,fontFamily:'Roboto',fontWeight:'bold'}}>Timeline</Text>
                </Left>
             </CardItem>
            
            <CardItem cardBody>
           
          <Item>
<Thumbnail source={profilepic} style={{height:40,width:40,marginLeft:5}}></Thumbnail>
            <Input style={{color:'black',marginLeft:5,fontFamily:'Roboto',fontSize:15,height:40,marginTop:10}}
            placeholder='   Whats on your mind?' placeholderTextColor="black"/>
            <Icon source={profilepic}></Icon>
          
          </Item>
            </CardItem>

            <CardItem>

              <Left>
                <Button transparent>
                <Image style={{height:32,width:32}} source={live}/>
              
                  <Text style={{color:'rgb(157, 161, 167)',marginRight:5,fontSize:10}}>Live</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <Image style={{height:30,width:30}} source={photos}/>

                  <Text style={{color:'rgb(157, 161, 167)',marginRight:5,fontSize:10}}>Phto</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                <Image style={{height:30,width:30}} source={liveevent}/>

                  <Text style={{color:'rgb(157, 161, 167)',marginLeft:5,fontSize:10}}>Life Event</Text>
                </Button>
                </Right>
            </CardItem>
          </Card>

        </Content>
       </View>


        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={profilepic} />
                <Body>
                  <Text>Ali Haider</Text>
                  <Text note>53 minutes ago <Image  source={notithumb} style={{height:30,width:30}}/></Text>
                 
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
             <Image source={require('./images/cover.jpg')} style={{height: 200, width: null, flex: 1}}/>
     
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
<Text style={{marginTop:12}}>424</Text>
</View>
<Text style={{marginTop:-24}} >                                                           32 Comments </Text>
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
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={profilepic} />
                <Body>
                  <Text>Ali Haider</Text>
                  <Text note>Yesterday at 21:23 <Image  source={notithumb} style={{height:30,width:30}}/></Text>
                 
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
             <Image source={require('./images/cover.jpg')} style={{height: 200, width: null, flex: 1}}/>
     
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
<Text style={{marginTop:12}}>33</Text>
</View>
<Text style={{marginTop:-24}} >                                      50 Comments ° 32 Shares </Text>
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


                    <Card>
            <CardItem>
              <Left>
                <Thumbnail source={profilepic} />
                <Body>
                  <Text>Ali Haider</Text>
                  <Text note>Jan 19 at 19:12<Image  source={notithumb} style={{height:30,width:30}}/></Text>
                 
                </Body>
              </Left>
            </CardItem>
            
            <CardItem cardBody>
             <Image source={require('./images/cover.jpg')} style={{height: 200, width: null, flex: 1}}/>
     
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
<Text style={{marginTop:12}}>931</Text>
</View>
<Text style={{marginTop:-24}} >                                      592 Comments ° 3 Shares </Text>
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
        </Content>

        

          </ScrollView>
          

      </Container>
    );
  }
}