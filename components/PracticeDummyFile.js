/* MAIN COMPONENT (FORMS)

import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent'; 
import Reservation from './ReservationComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view'; 
import { fetchCampsites, fetchComments, fetchPromotions, fetchPartners } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapDispatchToProps = {
    fetchCampsites,
    fetchComments,
    fetchPromotions,
    fetchPartners
}

const DirectoryNavigator = createStackNavigator (
    {
        Directory: { 
            screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: 
                    <Icon
                        name='list'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer}
                    />
            })
        },
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
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: 
                <Icon
                    name='home'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer}
                />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: 
                <Icon
                    name='info-circle'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer}
                />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: 
                <Icon
                    name='address-card'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer}
                />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}
        >
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>NuCamp</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const ReservationNavigator = createStackNavigator(
    {
        Reservation: { screen: Reservation }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: 
                <Icon
                    name='tree'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            } 
        },
        Directory: { 
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }  
        },
        Reservation: {
            screen: ReservationNavigator,
            navigationOptions: {
                drawerLabel: 'Reserve Campsite',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='tree'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: { 
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }  
        },
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }  
        }
    },
    {
        drawerBackgroundColor: '#CEC8FF',
        contentComponent: CustomDrawerContentComponent
    }
);

class Main extends Component {

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }

    render() {
        return(
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default connect(null, mapDispatchToProps)(Main);

*/

/* DIRECTORY COMPONENT (ACTIVITY INDICATOR)

import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Tile } from 'react-native-elements'; 
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent'; 

const mapStateToProps = state => {
    return {
        campsites: state.campsites
    };
};

class Directory extends Component {

    static navigationOptions = {
        title: 'Directory'
    };

    render() {

        const { navigate } = this.props.navigation;

        const renderDirectoryItem = ({item}) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        if (this.props.campsites.isLoading) {
            return <Loading />;
        }

        if (this.props.campsites.errMess) {
            return (
                <View>
                    <Text>{this.props.campsites.errMess}</Text>
                </View>
            );
        }

        return (
            <FlatList
                data={this.props.campsites.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

}

export default connect(mapStateToProps)(Directory);

*/

/* APP.JS (USING REDUX IN REACT NATIVE)

import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'; 

const store = ConfigureStore();

export default function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}

*/

/* CAMPSITE INFO COMPONENT (REDUX ADDING FAVORITES)

import React, { Component } from 'react';
import { Text, View, ScrollView, Flatlist } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators'; 

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: campsiteId => (postFavorite(campsiteId))
};

function RenderComments({comments}) {

    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`--${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Comments'>
            <Flatlist
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );

}

function RenderCampsite(props) {

    const {campsite} = props;

    if (campsite) {
        return (
            <Card featuredTitle={campsite.name} 
                    image={{uri: baseUrl + campsite.image}}>
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />
}

class CampsiteInfo extends Component {

    static navigationOptions = {
        title: 'Campsite Information'
    };

    markFavorite(campsiteId) {
        this.props.postFavorite(campsiteId);
    }

    render() {
        const campsiteId = this.props.navigation.getParam('campsiteId'); 
        const campsite = this.props.campsites.campsites.filter(campsite => campsite.id === campsiteId)[0];
        const comments = this.props.comments.comments.filter(comment => comment.campsiteId === campsiteId);
        return (
            <ScrollView>
                <RenderCampsite 
                    campsite={campsite}
                    favorite={this.props.favorites.includes(campsiteId)}
                    markFavorite={() => this.markFavorite(campsiteId)}
                />
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CampsiteInfo);

*/


/* HOME COMPONENT (ACTIVITY INDICATOR)

import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        promotions: state.promotions,
        partners: state.partners
    };
};

function RenderItem(props) {

    const {item} = props;

    if (props.isLoading) {
        return <Loading />;
    }

    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }

    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}>
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />
}

class Home extends Component {
    
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
                    isLoading={this.props.campsites.isLoading}
                    errMess={this.props.campsites.errMess}
                />
                <RenderItem
                    item={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    isLoading={this.props.promotions.isLoading}
                    errMess={this.props.promotions.errMess}
                />
                <RenderItem
                    item={this.props.partners.partners.filter(partner => partner.featured)[0]}
                    isLoading={this.props.partners.isLoading}
                    errMess={this.props.partners.errMess}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);

*/

/* ABOUT COMPONENT (ACTIVITY INDICATOR)

import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
      partners: state.partners
    };
};

function Mission() {
   
    return ( 
        <Card title='Our Mission'>
            <Text>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    );
}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {

        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };

        if (this.props.partners.isLoading) {
            return (
                <ScrollView>
                    <Mission />
                    <Card title='Community Partners'>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }

        if (this.props.partners.errMess) {
            return (
                <ScrollView>
                    <Mission />
                    <Card title='Community Partners'>
                        <Text>{this.props.partners.errMess}</Text>
                    </Card>
                </ScrollView>
            );
        }

        return (
            <ScrollView>
                <Mission />
                <Card title='Community Partners'>
                    <FlatList 
                        data={this.props.partners.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);

*/

/* LOADING COMPONENT (ACTIVITY INDICATOR)

import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function Loading() {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='#5637DD' />
            <Text style={styles.loadingText}>Loading . . .</Text>
        </View>
    );
}

const styles = StyleSheet.create (
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        loadingText: {
            color: '#5637DD',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
);

export default Loading;

*/

/* ACTION TYPES (ADDING FAVORITES)

export const ADD_FAVORITE = 'ADD FAVORITE';

*/

/* FAVORITES.JS REDUX (ADDING FAVORITES)

import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

        default:
            return state;
    }
};

*/

/* CONFIGURESTORE.JS (ADDING FAVORITES)

import { favorites } from './favorites';
import { combineReducers } from 'redux';

    combineReducers({
        campsites,
        comments,
        partners,
        promotions,
        favorites
    }),

*/

/* ACTIONCREATORS.JS (ADDING FAVORITES)

export const postFavorite = campsiteId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(campsiteId));
    }, 2000)
};

export const addFavorite = campsiteId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: campsiteId
});

*/

/* RESERVATION COMPONENT (MODAL)

import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal } from 'react-native';
import DatePicker from 'react-native-datepicker'; 

class Reservation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            campers: 1,
            hikeIn: false,
            date: '',
            showModal: false
        };
    }

    static navigationOptions = {
        title: 'Reserve Campsite'
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
    }

    resetForm() {
        this.setState({
            campers: 1,
            hikeIn: false,
            date: '',
            showModal: false
        });
    }

    render() {
        return(
            <ScrollView>

                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of Campers</Text>
                    <Picker 
                        style={styles.formItem}
                        selectedValue={this.state.campers}
                        onValueChange={itemValue => this.setState({campers: itemValue})}
                    >
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
                    </Picker>
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Hike-In?</Text>
                    <Switch
                        style={styles.formItem}
                        value={this.state.hikeIn}
                        trackColor={{true: '#5637DD', false: null}}
                        onValueChange={value => this.setState({hikeIn: value})}
                    >
                    </Switch>
                </View>
                    
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date</Text>
                    <DatePicker
                        style={{flex: 2, marginRight: 20}}
                        date={this.state.date}
                        format='YYYY-MM-DD'
                        mode='date'
                        placeholder='Select Date'
                        minDate={new Date().toISOString()}
                        confirmBtnText='Confirm'
                        cancelBtnText='Cancel'
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={date => {this.setState({date: date})}}
                    />
                </View>
                    
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleReservation()}
                        title='Search'
                        color='#5637DD'
                        accessibilityLabel='Tap me to search for available campsites to reserve'
                    />
                </View>

                <Modal
                    animationType={slide}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Search Campsite Reservations</Text>
                        <Text style={styles.modalText}>Number of Campers: {this.state.campers}</Text>
                        <Text style={styles.modalText}>Hike-In?: {this.state.hikeIn ? 'Yes' : 'No'}</Text>
                        <Text style={styles.modalText}>Date: {this.state.date}</Text>
                        <Button
                            onPress={() => {
                                this.toggleModal();
                                this.resetForm();
                            }}
                            color='#5637DD'
                            title='Close'
                        />
                    </View>
                </Modal>
                    
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default Reservation;

*/
