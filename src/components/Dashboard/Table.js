import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { DataTable } from 'react-native-paper';


export default function Table() {

  const [listExercicies, setlistExercicies] = useState([
    {name: 'Zumba', key: 1, category: 'Ritmos', hour: '18:00'},
    {name: 'Abodminal', key: 2, category: 'Exercícios', hour: '18:30'},
    {name: 'B. Combat', key: 3, category: 'Luta', hour: '19:00'},
    {name: 'Alogamento', key: 4, category: 'Exercícios', hour: '19:30'},
  ]);

  return (
    <DataTable style={styles.Wrapper}>

      <DataTable.Header style={styles.Header}>
        <DataTable.Title >
          <Text style={styles.Label}>Ordem</Text>
        </DataTable.Title>
        <DataTable.Title >
          <Text style={styles.Label}>Aulas</Text>
        </DataTable.Title>
        <DataTable.Title >
          <Text style={styles.Label}>Categoria</Text>
        </DataTable.Title>
        <DataTable.Title >
          <Text style={styles.Label}>Horário</Text>
        </DataTable.Title>
      </DataTable.Header>

      {listExercicies.map(item => (
        <DataTable.Row style={styles.Description} key={item.key}>
          <DataTable.Cell>
            <Text style={styles.Text}>{item.key}</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.Text}>{item.name}</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.Text}>{item.category}</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.Text}>{item.hour}</Text>
          </DataTable.Cell>
        </DataTable.Row>
      ))}

    </DataTable>
  )
}

const styles = StyleSheet.create({
  Wrapper: {
    marginTop: 10,
    borderRadius: 4,
    overflow: "hidden",
  },
  Header: {
    backgroundColor: '#ff8c00',
    
  },
  Label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FAFAFA'
  },
  Description: {
    backgroundColor: '#f5f5f5',
  },
  Text: {
    fontSize: 14,
    color: '#daa520',
    fontWeight: 'bold',
  }
})