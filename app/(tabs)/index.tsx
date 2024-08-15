import { Stack, router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import { ScreenContent } from '~/components/ScreenContent'
import { Button } from '~/components/Button'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One1' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
        <Button
          className="mx-auto w-[60%]"
          title="Go to Details"
          onPress={() => {
            router.push('/details')
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  }
})
