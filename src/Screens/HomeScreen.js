import React from 'react';
import { ScrollView, StyleSheet, SectionList, Text, View } from 'react-native';
import {BoxButton} from '../Components/ScreenComponents/Home/BoxButton.js'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };



  render() {
    
    return (
      <ScrollView style={styles.container}>


      <Text>dskfndsflndsklndskldnsflkdsnflkdsnflkdsnflkdsflkdsnfldskfndslkfndslkfndslkfndlskfndslkfnd</Text>


    
        <BoxButton
          iconName="md-folder-open"
          iconSize={70}
          iconColor="green"
          title="File Management"
          onPress={() => this.props.navigation.navigate('Page')}
        />

        <BoxButton
          iconName="md-search"
          iconSize={70}
          iconColor="green"
          title="Text Editing"
        /> 

        <BoxButton
          iconName="md-filing"
          iconSize={70}
          iconColor="green"
          title="Comparison"
        />
        
        <BoxButton
          iconName="md-filing"
          iconSize={70}
          iconColor="green"
          title="Searching"
        />

        <BoxButton
          iconName="md-globe"
          iconSize={70}
          iconColor="green"
          title="Testing Connection"
        /> 

        <BoxButton
          iconName="md-key"
          iconSize={70}
          iconColor="green"
          title="Access Control"
        /> 
        
        <BoxButton
          iconName="md-cog"
          iconSize={70}
          iconColor="green"
          title="System Status"
        /> 
           
        <BoxButton
          iconName="md-cog"
          iconSize={70}
          iconColor="green"
          title="Programming"
        /> 
        
        <BoxButton
          iconName="md-cog"
          iconSize={70}
          iconColor="green"
          title="System Status"
        /> 

        

      </ScrollView>
    );
  }
}


{/* <TouchableOpacity style={{backgroundColor: 'black', width: '100%', height: '100%', borderWidth: 5, borderColor: 'red'}}>
<View style={{backgroundColor: 'white', height: '100%', width: '30%', alignItems: 'center'}}>
    <Icon name="md-filing" size={83} color="red"/>
</View>
<Title title="File Mangement"/>
</TouchableOpacity> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'black',
  },
});
