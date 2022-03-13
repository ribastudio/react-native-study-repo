import React from 'react';
import { View, Alert, Text, Image } from 'react-native';
import { Container, H1Text, ParagraphText, DefaultButton } from './styles';

export default function ComponentTest() {
  return (
    <View>
      <Container>
        <Image 
          source={require('../../assets/splash.png')} 
          style={{ height: 5 }}
        />
        <H1Text>Teste de h1</H1Text>
        <ParagraphText>App de celular</ParagraphText>
        <ParagraphText>A Ana também vai aprender, se ela quiser</ParagraphText>
        <DefaultButton
          name="checking the box"
          onPress={() => Alert.alert('Por que você apertou este botão?')}
        >
          <Text>App de celular</Text>
        </DefaultButton>
      </Container>
    </View>
  )
}