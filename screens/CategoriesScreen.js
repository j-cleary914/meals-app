import React from "react";
import { View, Text } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justiftContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
