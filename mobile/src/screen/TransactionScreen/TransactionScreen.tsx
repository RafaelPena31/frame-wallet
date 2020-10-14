import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import style from './TransactionStyle'

const TransactionScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  /* AppFirebase.auth().signOut() */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <ScrollView>
        <LinearGradient
          colors={['#fff', '#d1dce2']}
          useAngle={true}
          angle={250}
          angleCenter={{ x: 0.3, y: 1 }}
          style={style.transactionContainer}>
          <View style={style.transactionHeader}>
            <Text style={style.textHeader}>Your wallet</Text>
          </View>
          <View style={style.valueContent}>
            <View style={style.balance}>
              <Text>Balance</Text>
              <Text>Add +</Text>
            </View>
            <Text>$00.00</Text>
            <View style={style.valueButtonContainer}>
              <TouchableOpacity style={style.valueButton}>
                <Text>Open wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.valueButton}>
                <Text>Buy cryptocurrency</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.progressContainer}>
            <Progress.Bar progress={0.73} width={320} color={'green'} height={13} style={style.progressBar} />
            <Text style={style.progressLabel}>Label</Text>
            <Progress.Bar progress={0.73} width={320} color={'green'} height={13} style={style.progressBar} />
            <Text style={style.progressLabel}>Label</Text>
            <Progress.Bar progress={0.73} width={320} color={'green'} height={13} style={style.progressBar} />
            <Text style={style.progressLabel}>Label</Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TransactionScreen
