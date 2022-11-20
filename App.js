import React from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form"

const App = () => {
  const { control, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  }
  
  return (
    <ScrollView style={styles.containerStyle}>
      <Text style={styles.textStyle}>Register Form</Text>
      <View style={styles.formStyle}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInputStyle}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Firstname'
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="firstname"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInputStyle}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Lastname'
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="lastname"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInputStyle}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Email'
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInputStyle}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Phone Number'
              keyboardType='numeric'
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="phone_number"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInputStyle}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Password'
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="password"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInputStyle}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Confirm Password'
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="confirm_password"
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit(onSubmit)}>
          <Text styles={{ color: '#FFFFFF', fontSize: 16 }}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 50,
  },
  textStyle: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  formStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(109, 109, 109, .65)',
    height: 50,
    borderRadius: 25,
    paddingLeft: 25,
    marginTop: 25
  },
  errorMsgStyle: {
    color: 'rgba(255,0,0,0.7)',
    paddingLeft: 10,
    marginTop: 4,
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#31D9DC',
    width: '40%',
    height: 40,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 6
  }
});

export default App;