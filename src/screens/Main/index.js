import React from 'react';
import {StatusBar, View, Image} from 'react-native';
import {
  Container,
  Content,
  Box,
  Title,
  Next,
  Count,
  ArrowRight,
} from './styles';
// import { Container } from './styles';

export default function Main({navigation}) {
  return (
    <Container>
      <StatusBar setBarStyle="light" backgroundColor="#EC3C50" />
      <Content>
        <Box>
          <Image
            resizeMode="contain"
            style={{width: 80, height: 80}}
            source={{
              uri:
                'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10490/slide/comida-japonesa-2-cursos-cpt.jpg',
            }}
          />

          <View style={{flex: 2, paddingLeft: 10}}>
            <Title>Bebidas</Title>
            <Count>15 items</Count>
          </View>

          <View>
            <Next onPress={() => {}}>
              <ArrowRight>></ArrowRight>
            </Next>
          </View>
        </Box>
        <Box>
          <Image
            resizeMode="contain"
            style={{width: 80, height: 80}}
            source={{
              uri:
                'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10490/slide/comida-japonesa-2-cursos-cpt.jpg',
            }}
          />

          <View style={{flex: 2, paddingLeft: 10}}>
            <Title>Bebidas</Title>
            <Count>15 items</Count>
          </View>

          <View>
            <Next onPress={() => navigation.navigate('Foods')}>
              <ArrowRight>></ArrowRight>
            </Next>
          </View>
        </Box>
        <Box>
          <Image
            resizeMode="contain"
            style={{width: 80, height: 80}}
            source={{
              uri:
                'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10490/slide/comida-japonesa-2-cursos-cpt.jpg',
            }}
          />

          <View style={{flex: 2, paddingLeft: 10}}>
            <Title>Bebidas</Title>
            <Count>15 items</Count>
          </View>

          <View>
            <Next onPress={() => {}}>
              <ArrowRight>></ArrowRight>
            </Next>
          </View>
        </Box>
      </Content>
    </Container>
  );
}
