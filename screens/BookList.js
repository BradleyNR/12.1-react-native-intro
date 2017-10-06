import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


class BookListScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      books: [
        {id: 1, title: 'React Native', text: 'A book detailing the data regarding React Native'},
        {id: 2, title: 'Puppies', text: 'A book of cute puppies!'}
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <BookList books={this.state.books} navigation={this.props.navigation}/>
      </View>
    );
  }
}

class BookList extends React.Component{
  _keyExtractor = (item, index) => {
    return item.id
  }

  _onPress = (book) => {
    const { navigate } = this.props.navigation;

    navigate('BookDetail', {book: book});
  }

  _renderItem = ({item}) => {
    return (
      <Text onPress={() => this._onPress(item)}>
        {item.title}
      </Text>
    );
  }

  render(){
    return (
      <FlatList
        data={this.props.books}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BookListScreen;
