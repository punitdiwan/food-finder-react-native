import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import {Ionicons} from '@expo/vector-icons';

// import Share from 'react-native-share';

// import files from '../assets/filesBase64';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              John Doe
            </Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name="md-map" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="md-megaphone" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="md-mail" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            john_doe@email.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>₹140.50</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons
              name="heart-md-information-circle"
              color="#FF6347"
              size={25}
            />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="md-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="md-help" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="md-cog" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
