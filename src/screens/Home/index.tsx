import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';

import { TaskCard } from '../../components/TaskCard';
import { Button } from '../../components/Button';
import { styles } from './styles';

interface TaskData {
  id: string;
  name: string;
}

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<TaskData[]>([]);

  function handleAddNewTask() {
    const data: TaskData = {
      id: String((new Date).getTime()),
      name: newTask
    };

    setTasks(oldState => [...oldState, data]);
  }

  function handleRemoveTask(id: string) {
    setTasks(oldState => oldState.filter(
      task => task.id != id
    ));
  }

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>
        Ola, Clayver!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        placeholderTextColor="#555"
        onChangeText={setNewTask}
      />

      <Button
        onPress={handleAddNewTask}
        activeOpacity={0.7}
        title="Adicionar tarefa"
      />

      <Text style={[styles.text, { marginTop: 20 }]}>
        Minhas Tarefas
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCard
            title={item.name}
            onPress={() => handleRemoveTask(item.id)}
          />
        )
        }
      />
    </SafeAreaView>
  );
}
