import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Checkboxprops {
  onPress: () => void;
  title: string;
  isChecked: boolean;
  onBlur: (e: any) => void;
}

function Checkbox({onPress, title, isChecked, onBlur}: Checkboxprops) {
  const iconName = isChecked ? 'checkbox-marked' : 'checkbox-blank-outline';

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} onBlur={onBlur}>
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color="#000"
          style={styles.iconstyle}
        />
      </Pressable>
      <Text style={styles.title} onPress={onPress}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    marginTop: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
    fontWeight: '600',
  },
  iconstyle: {
    color: 'green',
  },
});

export default Checkbox;
