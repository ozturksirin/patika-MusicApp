import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import music_data from './music_data.json';

import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [list, setlist] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searcedText) > -1;
    });
    setlist(filteredList);
  };
  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
  },
});
