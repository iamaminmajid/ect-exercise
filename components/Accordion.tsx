import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.accordion}>
      <TouchableOpacity style={styles.header} onPress={toggleAccordion}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name={isOpen ? 'remove' : 'add'} size={24} color="black" />
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{content}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {

    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 16,
  },
  content: {
    paddingBottom: 20,
  },
});

export default Accordion;
