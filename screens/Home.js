import React from 'react';
import { StyleSheet, Button, View } from 'react-native';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome To BOOKS',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          title="See List of Books"
          onPress={() =>
            navigate('BookList')
          }
        />
        <Button
          title="See Docs"
          onPress={() =>
            navigate('ReactDocs')
          }
        />

      </View>
    );
  }
}



export default HomeScreen;
