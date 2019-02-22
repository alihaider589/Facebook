import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,Accordion } from 'native-base';
import graduate from './images/graduate.png'
import groups from './images/groups.png'
import liveevent from './images/liveevent.png'
import watch from './images/watch.png'
import location from './images/location.png'
import photos from './images/photos.png'
import profilepic from './images/profilepic.jpg'



const dataArray = [
    { title: "See More", content: "Logout",Content:"Hello World " },

  ];




export default class Groups extends Component {

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem  thumbnail>
              <Left>
                <Thumbnail style={{width:43,height:43}} circular source={profilepic} />
              </Left>
              <Body>
                <Text>Ali Haider</Text>
                <Text style={{color:'grey'}} note numberOfLines={1}>View your Profile</Text>

              </Body>
              <Right>
              </Right>
            </ListItem>
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:40,width:40,borderRadius:5}} source={graduate} />
              </Left>
              <Body>
                <Text>Learning Web Mobile App Development</Text>
                 </Body>
              <Right>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:40,width:40,borderRadius:5}} source={graduate} />
              </Left>
              <Body>
                <Text>SMIU-Sindh Madresstul Islam University </Text>
                 </Body>
              <Right>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:40,width:40,borderRadius:5}} source={photos} />
              </Left>
              <Body>
                <Text>SMIU Photography Group</Text>
                 </Body>
              <Right>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:40,width:40,borderRadius:5}} source={photos} />
              </Left>
              <Body>
                <Text>Friends</Text>
                 </Body>
              <Right>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:40,width:40,borderRadius:5}} source={location} />
              </Left>
              <Body>
                <Text>Groups</Text>
                 </Body>
              <Right>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:40,width:40,borderRadius:5}} source={watch} />
              </Left>
              <Body>
                <Text>Videos on Watch</Text>
                 </Body>
              <Right>
              </Right>
            </ListItem>


            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:40,width:40,borderRadius:5}} source={liveevent} />
              </Left>
              <Body>
                <Text>Events</Text>
                 </Body>
              <Right>
              </Right>
            </ListItem>


            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{height:40,width:40,borderRadius:5}} source={photos} />
              </Left>
              <Body>
                <Text>Photos</Text>
                 </Body>
              <Right>
              </Right>
            </ListItem>


            <Content padder>
          <Accordion
            dataArray={dataArray}
       style={{color:'white'}}
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
          />
        </Content>
            
           </List>
        </Content>
        

        
      </Container>
    );
  }
}

