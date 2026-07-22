import React, {useCallback, useState} from 'react';
import {Pressable, Share, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Screen} from '../components/Screen';
import {Card, Chip, Subtitle, Title} from '../components/ui';
import {colors} from '../theme/colors';
import {readSavedAnalyses, SavedAnalysis, writeSavedAnalyses} from '../data/alibi';

export function SavedAnalysesScreen({navigation}: any) {
  const [items, setItems] = useState<SavedAnalysis[]>([]);
  useFocusEffect(useCallback(() => {readSavedAnalyses().then(setItems).catch(() => setItems([]));}, []));
  const remove = async (id: string) => {const next = items.filter(item => item.id !== id); setItems(next); await writeSavedAnalyses(next);};
  return <Screen>
    <Pressable onPress={() => navigation.goBack()}><Chip>‹ Back</Chip></Pressable>
    <View style={s.header}><Title>Saved Analyses</Title></View>
    {items.length === 0 ? <View style={s.empty}><View style={s.emptyIcon}><Text style={s.emptyIconText}>↶</Text></View><Text style={s.emptyTitle}>No analyses saved yet</Text><Subtitle>Complete an alibi check to build your investigation history.</Subtitle></View> : items.map(item => <Card key={item.id} style={s.card}>
      <View style={s.top}><Text style={s.title}>Suspect · {item.input.incidentLocation}</Text><Text style={s.badge}>{item.result.title}</Text></View>
      <Text style={s.meta}>{new Date(item.createdAt).toLocaleString()}</Text>
      <Text style={s.meta}>Confidence: <Text style={s.bold}>{item.result.confidence ?? '—'}%</Text>   Timeline Gap: <Text style={s.gap}>{item.result.gap >= 0 ? '+' : ''}{item.result.gap} min</Text></Text>
      <View style={s.actions}><Pressable style={s.button} onPress={() => navigation.navigate('Home', {screen:'Analyzer'})}><Text style={s.buttonText}>Edit</Text></Pressable><Pressable style={s.button} onPress={() => Share.share({message:`${item.result.title} — ${item.result.confidence ?? '—'}% confidence`})}><Text style={s.buttonText}>Share</Text></Pressable><Pressable style={[s.button,s.delete]} onPress={() => remove(item.id)}><Text style={s.deleteText}>Delete</Text></Pressable></View>
    </Card>)}
  </Screen>;
}
const s = StyleSheet.create({header:{marginTop:18,marginBottom:17},empty:{flex:1,minHeight:480,alignItems:'center',justifyContent:'center',paddingHorizontal:30},emptyIcon:{width:66,height:66,borderRadius:19,backgroundColor:colors.surface,borderWidth:1,borderColor:colors.border,alignItems:'center',justifyContent:'center',marginBottom:22},emptyIconText:{color:colors.purple,fontSize:30},emptyTitle:{color:colors.text,fontFamily:'Georgia',fontWeight:'800',fontSize:18,marginBottom:5},card:{marginBottom:12},top:{flexDirection:'row',justifyContent:'space-between',gap:8},title:{color:colors.text,fontFamily:'Georgia',fontWeight:'800',flex:1},badge:{color:colors.pink,fontSize:9,borderRadius:10,borderWidth:1,borderColor:'#61324f',padding:5},meta:{color:colors.muted,fontSize:10,marginTop:8},bold:{color:colors.text,fontWeight:'800'},gap:{color:colors.pink,fontWeight:'800'},actions:{flexDirection:'row',gap:7,marginTop:13},button:{flex:1,height:38,borderRadius:9,backgroundColor:colors.surfaceAlt,alignItems:'center',justifyContent:'center'},buttonText:{color:colors.text,fontSize:11,fontWeight:'700'},delete:{backgroundColor:'#59233f',borderWidth:1,borderColor:'#8f3c63'},deleteText:{color:colors.pink,fontSize:11,fontWeight:'800'}});
