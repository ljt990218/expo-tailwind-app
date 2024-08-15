import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>计数: {count}</Text>
      <Button title="增加" onPress={increment} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  text: {
    fontSize: 24,
    marginBottom: 20
  }
})
