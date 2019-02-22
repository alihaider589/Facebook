import React, { Component } from 'react';
import {View,Image } from 'react-native'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text ,Content,Item,Input, Left, Thumbnail, Right} from 'native-base';
import Feeds from './feeds'
import Notification from './Notification'
import Groups from './Groups'
import Watch from './watch'
import love from './images/notithumb.png'
import timeline from './images/timeline.png'
import watch from './images/watch.png'
import user from './images/user.png'
import group from './images/groups.png'
import menu from './images/menu.png'
import Profile from './profile'
import Menu from './menu'

export default class Headerjs extends Component {
  render() {
    return (
      <Container>
      
        <Header hasTabs style={{backgroundColor:'rgb(56, 82, 154)'}} >
        <Content>

          <Item>

            <Icon active name='search'style={{color:'white'}} />
            <Input style={{color:'white',marginLeft:5}} placeholder='Search' placeholderTextColor="white"/>
          
          </Item>
        </Content>
   
        </Header>

        <Tabs locked>
          <Tab heading={ <TabHeading style={{backgroundColor:'rgb(56, 82, 154)'}}>
        <Image style={{height:30,width:30}} source={timeline} />
          </TabHeading>} >
           <Feeds />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'rgb(56, 82, 154)'}}>
        <Image style={{height:30,width:30}} source={group} />
         
          </TabHeading>}>
       <Groups />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'rgb(56, 82, 154)'}}>
          <Image style={{height:30,width:30}} source={watch} />
          </TabHeading>}>
          <Watch />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'rgb(56, 82, 154)'}}>
          <Image style={{height:30,width:30}} source={user} />
   
          </TabHeading>} >
           <Profile />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'rgb(56, 82, 154)'}}>
          <Image style={{height:40,width:50}} source={love} />
          </TabHeading>}>
           <Notification />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'rgb(56, 82, 154)'}}>
          <Image style={{height:25,width:25}} source={menu} />
          
          </TabHeading>}>
       <Menu />
          </Tab>
        </Tabs>
      </Container>
    
    );
  }
}