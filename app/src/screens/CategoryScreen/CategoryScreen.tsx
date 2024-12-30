import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Paragraph, Avatar, Button } from 'react-native-paper';

const doctors = [
  {
    id: '1',
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    rating: 4.8,
    experience: '15 Years Experience',
  },
  {
    id: '2',
    name: 'Dr. Sarah Connor',
    specialty: 'Dermatologist',
    rating: 4.5,
    experience: '10 Years Experience',
  },
  {
    id: '3',
    name: 'Dr. Michael Smith',
    specialty: 'Pediatrician',
    rating: 4.9,
    experience: '12 Years Experience',
  },
  {
    id: '4',
    name: 'Dr. Emily Brown',
    specialty: 'Neurologist',
    rating: 4.7,
    experience: '8 Years Experience',
  },
  {
    id: '5',
    name: 'Dr. David Johnson',
    specialty: 'Orthopedic Surgeon',
    rating: 4.6,
    experience: '20 Years Experience',
  },
  {
    id: '6',
    name: 'Dr. Alice Green',
    specialty: 'Oncologist',
    rating: 4.9,
    experience: '18 Years Experience',
  },
];

const CategoryScreen = () => {
  const renderDoctorCard = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.name}
        subtitle={item.specialty}
        left={(props) => (
          <Avatar.Text
            {...props}
            label={item.name.split(' ')[1][0]}
            style={styles.avatar}
          />
        )}
        titleStyle={styles.cardTitle}
        subtitleStyle={styles.cardSubtitle}
      />
      <Card.Content>
        <Paragraph style={styles.infoText}>{item.experience}</Paragraph>
        <Paragraph style={styles.ratingText}>⭐ {item.rating.toFixed(1)}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => alert(`Contacting ${item.name}`)}
        >
          Contact
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.root}>
      {/* Main Heading */}
      <Text style={styles.mainHeading}>Our Specialists</Text>

      {/* Subheading */}
      <Text style={styles.subHeading}>Browse through the top-rated doctors in your area:</Text>

      <FlatList
        data={doctors}
        renderItem={renderDoctorCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Light blue background
    paddingHorizontal: 16,
  },
  listContent: {
    flexGrow: 1,
    paddingTop: 20, // Adds space above the first card
    paddingBottom: 20, // Adds space below the last card
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#37474F', // Neutral dark color
    textAlign: 'center',
    marginTop: 20, // Add space at the top of the screen
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: '#555', // Subtle gray color
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    paddingHorizontal: 12,
  },
  avatar: {
    backgroundColor: '#3f51b5', // Blue background for avatar
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#37474F', // Neutral dark color for title
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#757575', // Softer gray color for subtitle
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF8A65', // Orange for rating stars
    marginTop: 8,
  },
  button: {
    backgroundColor: '#6200ee', // Purple color for button
    marginLeft: 'auto',
    marginRight: 8,
    borderRadius: 8,
  },
});

export default CategoryScreen;
