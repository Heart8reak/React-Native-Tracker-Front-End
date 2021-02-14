import React from 'react' 
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    return (
    <>
        <Spacer>
            <Text h3>Sign up for Tracker</Text>
        </Spacer>
        <Input label='Email' />
        <Spacer />
        <Input label='Password' />
        <Spacer />
        <Spacer>
            <Button title='Sign Up' onPress={() => navigation.navigate('Signup')} />
        </Spacer>
    </>
    )
}

const styles = StyleSheet.create({})

export default SignupScreen