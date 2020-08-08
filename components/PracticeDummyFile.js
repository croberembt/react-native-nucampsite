/* MAIN COMPONENT (NAVIGATION PART 2)

import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent'; 
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const DirectoryNavigator = createStackNavigator (
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {

    render() {
        return(
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;

*/

/* DIRECTORY COMPONENT (NAVIGATION PART 1)

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites'; 

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    leftAvatar={{ source: require('./images/react-lake.jpg')}}
                />
            );
        };

    return (
        <FlatList
            data={this.state.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;

*/

/* APP.JS (COMPONENTS PART 1)

import React from 'react';
import Main from './components/MainComponent';

export default function App() {
    return (
        <Main />
    );
}

*/

/* CAMPSITE INFO COMPONENT (NAVIGATION PART 1)

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites'; 

function RenderCampsite({campsite}) {

    if (campsite) {
        return (
            <Card featuredTitle={campsite.name} image={require('./images/react-lake.jpg')}>
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text>
            </Card>
        );
    }
    return <View />
}

class CampsiteInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Campsite Information'
    };

    render() {
        const campsiteId = this.props.navigation.getParam('campsiteId'); 
        const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
        return <RenderCampsite campsite={campsite} />;
    }

}

export default CampsiteInfo;

*/


/* HOME COMPONENT (HOME COMPONENT WHICH IS RIGHT AFTER NAVIGATION 2)

import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners'; 

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}>
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />
}

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }
    
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.campsites.filter(campsite => campsite.featured)[0]}
                />
                <RenderItem
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;

*/