/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {Header} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [plainInput, onChangePlainInput] = useState('');

  const {control, handleSubmit, watch} = useForm<{
    text: string;
  }>();

  const onSubmit = (data: object) => console.log(data);
  const text = watch('text');
  const watchAll = watch();

  return (
    <SafeAreaView>
      <Header />
      <View>
        <TextInput
          placeholder="plain input"
          value={plainInput}
          onChangeText={value => onChangePlainInput(value)}
          style={styles.input}
        />

        <Controller
          control={control}
          name="text"
          rules={{
            required: {
              value: true,
              message: 'Field is required!',
            },
          }}
          render={({field: {onChange, value, onBlur}}) => (
            <TextInput
              placeholder="react-hook-form input"
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              style={styles.input}
            />
          )}
        />
        <Text>Input value: {text}</Text>
        <Text>Form value: {JSON.stringify(watchAll)}</Text>

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 6,
    margin: 20,
  },
});

export default App;
