import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12) {
      setGretting('Good Morning!')
    } else if(currentHour > 12 && currentHour < 18) {
      setGretting('Good afternoon!')
    } else {
      setGretting('Good night!')
    }
  },[])

  return (
    <View style={styles.container}>      
        <Text style={styles.title}>
          Wellcome, Lucas!
        </Text>
        <Text style={styles.gretting}>
          {gretting}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="New skills..."
          placeholderText="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill}/>

        <Text style={[styles.title, {marginVertical: 50}]}>
          My Skills
        </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70   
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  gretting :{
    color: '#FFF'
  }

})