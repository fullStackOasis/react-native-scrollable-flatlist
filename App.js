/**
 * Example from https://reactnative.dev/docs/flatlist
 */
import React, { useState } from 'react';

import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [];

const MAX_ITEMS = 100;

const INCREMENT = 1000; // in ms

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {

  /**
   * Every INCREMENT, add a new item.
   * Stop once you get to MAX_ITEMS
   */
  const ticker = () => {
    if (count < MAX_ITEMS) {
        setTimeout(function() {
            setCount(count+1);
            // id has to be a string.
            if (count % 2 == 0) {
                // if even, use unshift to add to top of list
                DATA.unshift({ id: "" + count, title : 'Item #' + count });
            } else {
                // if even, use unshift to push to bottom of list
                DATA.push({ id: "" + count, title : 'Item #' + count });
            }
            console.log(DATA);
        }, INCREMENT);
    }
  }

  const [count, setCount] = useState(0);

  // Start the ticker going.
  ticker();

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.fl}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  fl : {
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;