import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, StatusBar, Image } from 'react-native';

export default function App() {
  const profile = {
    nome: 'Heitor Kenzo Mitsuuti',
    title: 'Estudante de Desenvolvimento de Sistemas',
    location: 'Birigui, SP, Brasil',
    email: 'heitor.mitsuuti@gmrail.com',
    phone: '+55 18 99735-8524'
  };

  const experiences = [
    {
      role: 'Sou aluno do 3º ano do ensino médio e aluno do curso Técnico em Desenvolvimento de Sistemas, atualmente pratico karatê shotokan, tenho como filosofia de vida o budô, além disso já trabalhei como jovem aprendiz em uma marcenaria (no momento não mais) e tenho participado de olimpíadas do conhecimento na escola.',
      details: 'Apoio no desenvolvimento de projetos em Python, HTML, CSS e JavaScript. Colaboração em equipe e testes de software.'
    }
  ];

  const education = [
    {
      institution: 'Senai Avak Bedouian',
      degree: 'Técnico em Desenvolvimento de Sistemas',
      period: '2024 - 2025'
    },
    {
      institution: 'Sesi Samir Nakad - CE 0148',
      degree: 'Ensino Médio',
      period: '2023 - 2025'
    }
  ];

  const skills = ['JavaScript', 'React Native', 'Python', 'SQL (Firebird)', 'HTML', 'CSS', 'Aprendizado em cortes de madeira', 'Karate Shotokan', 'Karate Kyokushin'];

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.scroll}>
          <Image style={styles.imagem_de_perfil} source={require('./assets/koi.jpg')}/>

          <View style={styles.cabecalho}>
            <Text style={styles.nome}>{profile.nome}</Text>
            <Text style={styles.titulo}>{profile.titulo}</Text>
            <Text style={styles.info}>{profile.location}</Text>
            <Text style={styles.info}>{profile.email} | {profile.phone}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
            {education.map((ed, idx) => (
                <View key={idx} style={styles.item}>
                  <Text style={styles.itemTitle}>{ed.institution}</Text>
                  <Text style={styles.itemSubtitle}>{ed.degree} ({ed.period})</Text>
                </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experiência Profissional</Text>
            {experiences.map((exp, idx) => (
                <View key={idx} style={styles.item}>
                  <Text style={styles.itemTitle}>{exp.role}</Text>
                  <Text style={styles.itemSubtitle}>{exp.period}</Text>
                  <Text style={styles.itemDetail}>{exp.details}</Text>
                </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Habilidades</Text>
            <View style={styles.skillsContainer}>
              {skills.map((skill, idx) => (
                  <Text key={idx} style={styles.skill}>{skill}</Text>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  imagem_de_perfil: {
    width: '150',
    height: '150',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scroll: {
    padding: 20
  },

  cabecalho: {
    alignItems: 'center',
    marginBottom: 30 },

  nome: { fontSize: 28,
    fontWeight: 'bold'
  },

  titulo: {
    fontSize: 18,
    color: '#555',
    marginTop: 4
  },

  info: {
    fontSize: 14,
    color: '#777',
    marginTop: 2
  },

  section: {
    marginBottom: 25
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  item: {
    marginBottom: 12
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: '500'
  },

  itemSubtitle: {
    fontSize: 14,
    color: '#555'
  },

  itemDetail: {
    fontSize: 14,
    color: '#333',
    marginTop: 4
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  skill: {
    backgroundColor: '#eef',
    padding: 6,
    margin: 4,
    borderRadius: 4,
    fontSize: 14 }
});