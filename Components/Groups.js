import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import Ali from './images/Ali.jpg'
import things from './images/things.jpg'
import smiu from './images/smiu.jpg'
import gamers from './images/gamers.jpg'
import gta from './images/gta.jpg'
import Learning from './images/learning.jpg'
export default class Groups extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Your Groups</Text>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={gta} />
              </Left>
              <Body>
                <Text>GTA 5 Pakistan</Text>
                <Text note numberOfLines={1}>Ali haider Posted 1 hour ago</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={things} />
              </Left>
              <Body>
                <Text>Web Assembly</Text>
                <Text note numberOfLines={1}>Zia Khan Posted:The Latest Rust Programmin...</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>

            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={smiu} />
              </Left>
              <Body>
                <Text>Evening K Cheeteh</Text>
                <Text note numberOfLines={1}>Updated about 2 months ago</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>

            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={things} />
              </Left>
              <Body>
                <Text>Things You Like Most</Text>
                <Text note numberOfLines={1}>Umer Altaf made a post</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>

            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={Learning} />
              </Left>
              <Body>
                <Text>Learning Web Mobile App Development</Text>
                <Text note numberOfLines={1}>Updated 21 hours ago.</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>

            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={smiu} />
              </Left>
              <Body>
                <Text> SMIU-Sindh Madressatul Islam University</Text>
                <Text note numberOfLines={1}>Updated 2 hours ago.</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>

            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={gamers} />
              </Left>
              <Body>
                <Text>Gamers Connection in Pakistan</Text>
                <Text note numberOfLines={1}>Faizan Ullah Kalhoro posted Something 2 hours ago</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>

            
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={gamers} />
              </Left>
              <Body>
                <Text>AB Computers</Text>
                <Text note numberOfLines={1}>Hasnain Shouqat Added account for sale</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
          </List>
        </Content>

        
      </Container>
    );
  }
}