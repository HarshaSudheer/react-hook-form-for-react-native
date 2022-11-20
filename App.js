import React from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form"

const App = () => {
  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  
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
          rules={{
            required: 'Firstname is required'
          }}
        />
        {errors.firstname && <Text style={styles.errorMsgStyle}>{errors.firstname.message}</Text>}

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
          rules={{
            required: 'Lastname is required'
          }}
        />
        {errors.lastname && <Text style={styles.errorMsgStyle}>{errors.lastname.message}</Text>}

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
          rules={{
            required: 'Email is required',
            pattern: { value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]$/, message: 'Invalid email' }
          }}
        />
        {errors.email && <Text style={styles.errorMsgStyle}>{errors.email.message}</Text>}

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
          rules={{
            required: 'Phone Number is required',
            pattern: { value: /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/, message: "Invalid phone number" }
          }}
        />
        {errors.phone_number && <Text style={styles.errorMsgStyle}>{errors.phone_number.message}</Text>}

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
          rules={{
            required: 'Password is required',
            minLength: { value: 8, message: 'Password must be atleast 8 charecters' },
            maxLength: { value: 32, message: 'Password must not have more than 32 charecters' },
            pattern: { value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*#!@$%^&]).{8,32}$/, message: 'Password must contain atleast 1 uppercase, 1 lowercase, 1 special character(!@#$%^&*) and 1 digit' }
          }}
        />
        {errors.password && <Text style={styles.errorMsgStyle}>{errors.password.message} </Text>}

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
          rules={{
            required: 'Confirm Password is required',
            validate: (value) => value === watch('password') || "Passwords does not match"
          }}
        />
        {errors.confirm_password && <Text style={styles.errorMsgStyle}>{errors.confirm_password.message} </Text>}

        <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit(onSubmit)}>
          <Text styles={{ color: '#FFFFFF', fontSize: 16 }}>Sign Up</Text>
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