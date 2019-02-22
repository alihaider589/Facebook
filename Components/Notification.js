import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import Ali from './images/Ali.jpg'
export default class Groups extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Your Notification</Text>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/learning.jpg')} />
              </Left>
              <Body>
                <Text>Learing Web Mobile App and Development</Text>
                <Text note numberOfLines={1}>Apptron posted Something a new Assigment</Text>
              </Body>
              <Right>
                
              <Thumbnail square source={require('./images/learning.jpg')} />
              </Right>
            </ListItem>
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/photos.png')} />
              </Left>
              <Body>
                <Text>Tags Request</Text>
                <Text note numberOfLines={1}>You have 18 pending Tags Request</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>

            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/learning.jpg')} />
              </Left>
              <Body>
                <Text>Learing Web Mobile App and Development</Text>
                <Text note numberOfLines={1}>Apptron posted Something a new Assigment</Text>
              </Body>
              <Right>
                
              <Thumbnail square source={require('./images/learning.jpg')} />
              </Right>
            </ListItem>
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/learning.jpg')} />
              </Left>
              <Body>
                <Text>Learing Web Mobile App and Development</Text>
                <Text note numberOfLines={1}>Apptron posted Something a new Assigment</Text>
              </Body>
              <Right>
                
              <Thumbnail square source={require('./images/learning.jpg')} />
              </Right>
            </ListItem>
            
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/learning.jpg')} />
              </Left>
              <Body>
                <Text>Learing Web Mobile App and Development</Text>
                <Text note numberOfLines={1}>Apptron posted Something a new Assigment</Text>
              </Body>
              <Right>
                
              <Thumbnail square source={require('./images/learning.jpg')} />
              </Right>
            </ListItem>
            
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/learning.jpg')} />
              </Left>
              <Body>
                <Text>Learing Web Mobile App and Development</Text>
                <Text note numberOfLines={1}>Apptron posted Something a new Assigment</Text>
              </Body>
              <Right>
                
              <Thumbnail square source={require('./images/learning.jpg')} />
              </Right>
            </ListItem>
            
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/learning.jpg')} />
              </Left>
              <Body>
                <Text>Learing Web Mobile App and Development</Text>
                <Text note numberOfLines={1}>Apptron posted Something a new Assigment</Text>
              </Body>
              <Right>
                
              <Thumbnail square source={require('./images/learning.jpg')} />
              </Right>
            </ListItem>
            
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('./images/learning.jpg')} />
              </Left>
              <Body>
                <Text>Learing Web Mobile App and Development</Text>
                <Text note numberOfLines={1}>Apptron posted Something a new Assigment</Text>
              </Body>
              <Right>
                
              <Thumbnail square source={require('./images/learning.jpg')} />
              </Right>
            </ListItem>
            
          </List>
        </Content>
        

        
      </Container>
    );
  }
}