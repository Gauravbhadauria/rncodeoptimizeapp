import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const RN_UI_BestPractices = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* FONT SIZES */}
        <Text style={styles.sectionTitle}>Font Sizes</Text>
        <Text style={styles.small}>Small Text (12dp)</Text>
        <Text style={styles.body}>Body Text (16dp)</Text>
        <Text style={styles.subHeading}>Subheading (20dp)</Text>
        <Text style={styles.heading}>Heading (24dp)</Text>
        <Text style={styles.largeTitle}>Large Title (32dp)</Text>

        {/* SPACING */}
        <Text style={styles.sectionTitle}>Spacing (Padding & Margin)</Text>
        <Text style={styles.smallMargin}>Small Margin (8dp)</Text>
        <Text style={styles.defaultMargin}>Default Margin (16dp)</Text>
        <Text style={styles.largePadding}>Large Padding (24dp)</Text>

        {/* BUTTON SIZES */}
        <Text style={styles.sectionTitle}>Button Heights</Text>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.buttonText}>Small (40dp)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.defaultButton}>
          <Text style={styles.buttonText}>Default (48dp)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.largeButton}>
          <Text style={styles.buttonText}>Large (56dp)</Text>
        </TouchableOpacity>

        {/* BORDER RADIUS */}
        <Text style={styles.sectionTitle}>Border Radius</Text>
        <View style={styles.smallBox}>
          <Text style={styles.boxText}>Radius 8</Text>
        </View>

        <View style={styles.mediumBox}>
          <Text style={styles.boxText}>Radius 12</Text>
        </View>

        <View style={styles.largeBox}>
          <Text style={styles.boxText}>Radius 16</Text>
        </View>

        <View style={styles.circle}>
          <Text style={styles.boxText}>Circle</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },

  // FONT SIZES
  small: {fontSize: 12, color: '#333'},
  body: {fontSize: 16, color: '#222'},
  subHeading: {fontSize: 20, fontWeight: 'bold'},
  heading: {fontSize: 24, fontWeight: 'bold'},
  largeTitle: {fontSize: 32, fontWeight: 'bold', color: '#007AFF'},

  // SPACING
  smallMargin: {margin: 8, padding: 8, backgroundColor: '#FFD700'},
  defaultMargin: {margin: 16, padding: 16, backgroundColor: '#00CED1'},
  largePadding: {margin: 24, padding: 24, backgroundColor: '#FF4500'},

  // BUTTON SIZES
  smallButton: {
    height: 40,
    width: 150,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  defaultButton: {
    height: 48,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#28A745',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  largeButton: {
    height: 56,
    width: 180,
    borderRadius: 12,
    backgroundColor: '#DC3545',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },

  // BORDER RADIUS
  smallBox: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  mediumBox: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#00CED1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  largeBox: {
    width: 140,
    height: 140,
    borderRadius: 16,
    backgroundColor: '#FF4500',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50, // Full circle
    backgroundColor: '#6A5ACD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default RN_UI_BestPractices;
