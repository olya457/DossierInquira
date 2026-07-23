import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import type {StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Screen} from '../components/Screen';
import {Card, Subtitle, Title} from '../components/ui';
import {colors} from '../theme/colors';
import {
  AlibiInput,
  AlibiResult,
  analyzeAlibi,
  defaultAlibiInput,
} from '../data/alibi';
import {
  readSavedAnalyses,
  writeSavedAnalyses,
} from '../services/storage/alibiStorage';
import type {AnalysisScreenProps} from '../navigation/types';

const transports = ['Walking', 'Bicycle', 'Car', 'Public Transport', 'Custom'];
const digitalOptions = ['None', 'Message', 'Receipt', 'Camera', 'Location Data'];
const locations = ['Bellamy Café', 'Riverside Gallery', 'Central Station', 'Old Town Library', 'Harbor Hotel', 'City Park', 'Westside Market', 'North District'];
const timeOptions = Array.from({length: 96}, (_, index) => {
  const hour = Math.floor(index / 4);
  const minute = (index % 4) * 15;
  const period = hour >= 12 ? 'PM' : 'AM';
  return `${hour % 12 || 12}:${minute.toString().padStart(2, '0')} ${period}`;
});
const verdictColors = {
  unlikely: colors.red,
  strong: colors.green,
  possible: '#72aee8',
  uncertain: colors.yellow,
  insufficient: colors.muted,
};

function minutesBetween(start: string, end: string) {
  const parse = (value: string) => {
    const match = value.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
    if (!match) {
      return null;
    }
    let hour = Number(match[1]);
    const minute = Number(match[2]);
    const period = match[3]?.toUpperCase();
    if (minute > 59 || hour > (period ? 12 : 23)) {
      return null;
    }
    if (period) {
      hour = (hour % 12) + (period === 'PM' ? 12 : 0);
    }
    return hour * 60 + minute;
  };
  const from = parse(start);
  const to = parse(end);
  if (from === null || to === null) {
    return null;
  }
  return (to - from + 24 * 60) % (24 * 60);
}

type FieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

const Field = ({label, value, onChangeText, style}: FieldProps) => (
  <View style={style}>
    <Text style={s.label}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={colors.muted}
      style={s.input}
    />
  </View>
);

type PickerFieldProps = {
  label: string;
  value: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const PickerField = ({label, value, onPress, style}: PickerFieldProps) => (
  <View style={style}>
    <Text style={s.label}>{label}</Text>
    <Pressable style={s.pickerField} onPress={onPress}>
      <Text style={s.pickerValue}>{value}</Text>
      <Text style={s.chevron}>⌄</Text>
    </Pressable>
  </View>
);

export function AlibiAnalyzerScreen({
  navigation,
}: AnalysisScreenProps<'Analyzer'>) {
  const [input, setInput] = useState<AlibiInput>(defaultAlibiInput);
  const [result, setResult] = useState<AlibiResult | null>(null);
  const [saved, setSaved] = useState(false);
  const [picker, setPicker] = useState<null | {title: string; options: string[]; value: string; select: (value: string) => void}>(null);
  const update = <Key extends keyof AlibiInput>(
    key: Key,
    value: AlibiInput[Key],
  ) =>
    setInput(current => ({...current, [key]: value}));
  const updateTime = (key: 'incidentTime' | 'lastConfirmedTime', value: string) =>
    setInput(current => {
      const next = {...current, [key]: value};
      const available = minutesBetween(
        next.lastConfirmedTime,
        next.incidentTime,
      );
      return available === null ? next : {...next, availableMinutes: available};
    });
  const openPicker = (title: string, options: string[], value: string, select: (value: string) => void) =>
    setPicker({title, options, value, select});

  const share = async () => {
    if (!result) {return;}
    await Share.share({
      message: `${result.title} (${result.confidence ?? '—'}% confidence)\nTimeline gap: ${result.gap >= 0 ? '+' : ''}${result.gap} min\n${result.note}`,
    });
  };
  const save = async () => {
    if (!result) {return;}
    const items = await readSavedAnalyses().catch(() => []);
    await writeSavedAnalyses([
      {
        id: `${Date.now()}`,
        createdAt: new Date().toISOString(),
        input,
        result,
      },
      ...items,
    ]);
    setSaved(true);
  };

  if (result) {
    const accent = verdictColors[result.kind];
    return (
      <Screen>
        <Header navigation={navigation} />
        <Card style={[s.resultCard, {borderColor: accent}]}>
          <View style={s.resultHeader}>
            <View style={[s.resultIcon, {borderColor: accent}]}>
              <Text style={[s.resultCheck, {color: accent}]}>✓</Text>
            </View>
            <View style={s.resultTitleWrap}>
              <Text style={s.micro}>RESULT</Text>
              <Text style={[s.resultTitle, {color: accent}]}>{result.title}</Text>
            </View>
            <View>
              <Text style={s.confidence}>{result.confidence ?? '—'}%</Text>
              <Text style={s.micro}>confidence</Text>
            </View>
          </View>
          <View style={s.metrics}>
            <Metric label="Timeline Gap" value={`${result.gap >= 0 ? '+' : ''}${result.gap} min`} accent={accent} />
            <Metric label="Available Time" value={`${input.availableMinutes} min`} />
            <Metric label="Required Travel" value={`${input.travelMinutes + input.delayMinutes} min`} />
            <Metric label="Evidence Strength" value={result.evidence} />
          </View>
          <Text style={s.warning}>⚠  Weakest point: <Text style={s.warningCopy}>{result.weakest}</Text></Text>
          <Text style={[s.detectiveLabel, {color: accent}]}>Detective note</Text>
          <Text style={s.note}>{result.note}</Text>
        </Card>
        {saved && <Text style={s.savedMessage}>✓ Analysis saved</Text>}
        <View style={s.actionRow}>
          <Action label={saved ? '✓ Saved' : '▣ Save'} primary onPress={save} />
          <Action label="↗ Share" onPress={share} />
        </View>
        <View style={s.actionRow}>
          <Action label="Edit Inputs" onPress={() => {setResult(null); setSaved(false);}} />
          <Action label="New Analysis" onPress={() => {setInput(defaultAlibiInput); setResult(null); setSaved(false);}} />
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <Header navigation={navigation} />
      <Section number="1" title="Incident Timeline">
        <View style={s.twoCol}>
          <PickerField label="Incident Time" value={input.incidentTime} style={s.col} onPress={() => openPicker('Incident Time', timeOptions, input.incidentTime, v => updateTime('incidentTime', v))} />
          <PickerField label="Last Confirmed" value={input.lastConfirmedTime} style={s.col} onPress={() => openPicker('Last Confirmed Time', timeOptions, input.lastConfirmedTime, v => updateTime('lastConfirmedTime', v))} />
        </View>
        <PickerField label="Last Confirmed Location" value={input.lastLocation} onPress={() => openPicker('Last Confirmed Location', locations, input.lastLocation, v => update('lastLocation', v))} />
        <PickerField label="Incident Location" value={input.incidentLocation} onPress={() => openPicker('Incident Location', locations, input.incidentLocation, v => update('incidentLocation', v))} />
        <View style={s.available}><Text style={s.availableLabel}>Available Time</Text><Text style={s.availableValue}>{input.availableMinutes} min</Text></View>
      </Section>
      <Section number="2" title="Travel Estimate">
        <View style={s.twoCol}>
          <PickerField label="Distance" value={input.distance} style={s.col} onPress={() => openPicker('Distance', Array.from({length: 50}, (_, i) => `${i + 1}`), input.distance, v => update('distance', v))} />
          <PickerField label="Unit" value={input.unit} style={s.col} onPress={() => openPicker('Unit', ['km', 'mi'], input.unit, v => update('unit', v as AlibiInput['unit']))} />
        </View>
        <PickerField label="Transport Method" value={input.transport} onPress={() => openPicker('Transport Method', transports, input.transport, v => update('transport', v))} />
        <PickerField label="Estimated Travel Time" value={`${input.travelMinutes} min`} onPress={() => openPicker('Estimated Travel Time', Array.from({length: 24}, (_, i) => `${(i + 1) * 5} min`), `${input.travelMinutes} min`, v => update('travelMinutes', Number(v.split(' ')[0])))} />
        <PickerField label="Possible Delay" value={`${input.delayMinutes} min`} onPress={() => openPicker('Possible Delay', ['0 min', '3 min', '5 min', '6 min', '10 min', '15 min', '20 min', '30 min'], `${input.delayMinutes} min`, v => update('delayMinutes', Number(v.split(' ')[0])))} />
        <Field label="Custom Notes (optional)" value={input.notes} onChangeText={(v: string) => update('notes', v)} />
        <View style={s.summaryRow}><Metric label="Min Required" value={`${input.travelMinutes} min`} /><Metric label="Adjusted" value={`${input.travelMinutes + input.delayMinutes} min`} /><Metric label="Difference" value={`${input.availableMinutes - input.travelMinutes - input.delayMinutes >= 0 ? '+' : ''}${input.availableMinutes - input.travelMinutes - input.delayMinutes} min`} accent={colors.pink} /></View>
      </Section>
      <Section number="3" title="Supporting Evidence">
        <PickerField label="Witness Reliability" value={input.reliability} onPress={() => openPicker('Witness Reliability', ['Low', 'Medium', 'High'], input.reliability, v => update('reliability', v as AlibiInput['reliability']))} />
        <PickerField label="Digital Evidence" value={input.digitalEvidence} onPress={() => openPicker('Digital Evidence', digitalOptions, input.digitalEvidence, v => update('digitalEvidence', v))} />
        <PickerField label="Evidence Verification" value={input.verification} onPress={() => openPicker('Evidence Verification', ['Unverified', 'Partially Verified', 'Verified'], input.verification, v => update('verification', v as AlibiInput['verification']))} />
        <View style={s.switchRow}><Text style={s.label}>Possible alternative route</Text><Switch value={input.alternativeRoute} onValueChange={v => update('alternativeRoute', v)} trackColor={{false: colors.surfaceAlt, true: colors.pink}} /></View>
      </Section>
      <Pressable onPress={() => {setResult(analyzeAlibi(input)); setSaved(false);}}>
        <LinearGradient colors={[colors.pink, colors.coral]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={s.analyzeButton}><Text style={s.analyzeText}>⌕  Analyze Alibi</Text></LinearGradient>
      </Pressable>
      <SelectionSheet picker={picker} close={() => setPicker(null)} />
    </Screen>
  );
}

function Header({
  navigation,
}: {
  navigation: AnalysisScreenProps<'Analyzer'>['navigation'];
}) {
  return <View style={s.header}><View style={s.flex}><Title>Alibi Analyzer</Title><Subtitle>Reconstruct the timeline and test whether the alibi holds.</Subtitle></View><Pressable style={s.iconButton} onPress={() => navigation.navigate('SavedAnalyses')}><Text style={s.iconText}>↶</Text></Pressable></View>;
}
function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return <Card style={s.section}><View style={s.sectionHeader}><Text style={s.number}>{number}</Text><Text style={s.sectionTitle}>{title}</Text></View>{children}</Card>;
}
function Metric({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return <View style={s.metric}><Text style={s.metricLabel}>{label}</Text><Text style={[s.metricValue, accent && {color: accent}]}>{value}</Text></View>;
}
function Action({
  label,
  onPress,
  primary = false,
}: {
  label: string;
  onPress: () => void;
  primary?: boolean;
}) {
  if (primary) {return <Pressable style={s.flex} onPress={onPress}><LinearGradient colors={[colors.pink, colors.coral]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={s.action}><Text style={s.primaryActionText}>{label}</Text></LinearGradient></Pressable>;}
  return <Pressable style={[s.action, s.secondaryAction]} onPress={onPress}><Text style={s.actionText}>{label}</Text></Pressable>;
}
type PickerState = {
  title: string;
  options: string[];
  value: string;
  select: (value: string) => void;
};

function SelectionSheet({
  picker,
  close,
}: {
  picker: PickerState | null;
  close: () => void;
}) {
  return <Modal visible={Boolean(picker)} transparent animationType="slide" onRequestClose={close}>
    <Pressable style={s.modalShade} onPress={close}>
      <Pressable style={s.sheet} onPress={() => {}}>
        <View style={s.sheetHandle} />
        <Text style={s.sheetTitle}>{picker?.title}</Text>
        <ScrollView style={s.optionScroll} showsVerticalScrollIndicator={false}>
          {picker?.options.map((option: string) => <Pressable key={option} style={[s.option, picker.value === option && s.optionActive]} onPress={() => {picker.select(option); close();}}><Text style={[s.optionText, picker.value === option && s.optionTextActive]}>{option}</Text>{picker.value === option && <Text style={s.check}>✓</Text>}</Pressable>)}
        </ScrollView>
        <Pressable style={s.cancel} onPress={close}><Text style={s.cancelText}>Cancel</Text></Pressable>
      </Pressable>
    </Pressable>
  </Modal>;
}

const s = StyleSheet.create({
  flex: {flex: 1},
  resultCheck: {fontSize: 20},
  header:{flexDirection:'row',gap:10,alignItems:'flex-start',marginBottom:16},iconButton:{width:42,height:42,borderRadius:12,backgroundColor:colors.surfaceAlt,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:colors.border},iconText:{color:colors.text,fontSize:22},section:{marginBottom:14,padding:16},sectionHeader:{flexDirection:'row',alignItems:'center',gap:9,marginBottom:15},number:{width:24,height:24,borderRadius:7,backgroundColor:'#61324f',color:colors.pink,textAlign:'center',lineHeight:24,fontWeight:'800',fontSize:12},sectionTitle:{color:colors.text,fontWeight:'800',fontSize:14},label:{color:colors.muted,fontSize:11,fontWeight:'600',marginBottom:7,marginTop:10},input:{height:45,borderRadius:10,borderWidth:1,borderColor:colors.border,backgroundColor:'#180e25',color:colors.text,paddingHorizontal:12},pickerField:{height:45,borderRadius:10,borderWidth:1,borderColor:colors.border,backgroundColor:'#180e25',paddingHorizontal:12,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},pickerValue:{color:colors.text,fontSize:13,flex:1},chevron:{color:colors.pink,fontSize:18,marginLeft:6},twoCol:{flexDirection:'row',gap:10},col:{flex:1},available:{height:45,borderRadius:10,borderWidth:1,borderColor:'#584378',backgroundColor:'#31264e',marginTop:12,paddingHorizontal:12,alignItems:'center',justifyContent:'space-between',flexDirection:'row'},availableLabel:{color:colors.muted,fontSize:11},availableValue:{color:'#7eacec',fontWeight:'800'},summaryRow:{flexDirection:'row',gap:7,marginTop:12},metric:{flex:1,minWidth:0,borderRadius:10,backgroundColor:'#1a1027',padding:10},metricLabel:{color:colors.muted,fontSize:9,marginBottom:5},metricValue:{color:colors.text,fontWeight:'800',fontSize:12},switchRow:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:6},analyzeButton:{height:52,borderRadius:13,alignItems:'center',justifyContent:'center',marginBottom:8},analyzeText:{color:'#2b1228',fontWeight:'900'},resultCard:{padding:17},resultHeader:{flexDirection:'row',alignItems:'center'},resultIcon:{width:45,height:45,borderRadius:15,borderWidth:1,alignItems:'center',justifyContent:'center'},resultTitleWrap:{flex:1,paddingHorizontal:12},micro:{color:colors.muted,fontSize:8,textTransform:'uppercase'},resultTitle:{fontFamily:'Georgia',fontWeight:'800',fontSize:20,marginTop:2},confidence:{color:colors.text,fontFamily:'Georgia',fontSize:27,fontWeight:'800',textAlign:'right'},metrics:{flexDirection:'row',flexWrap:'wrap',gap:8,marginTop:17},warning:{color:colors.coral,fontSize:11,marginTop:14,lineHeight:17},warningCopy:{color:colors.muted},detectiveLabel:{fontSize:11,fontWeight:'800',marginTop:15},note:{color:colors.muted,fontFamily:'Georgia',fontStyle:'italic',fontSize:12,lineHeight:19,marginTop:7},actionRow:{flexDirection:'row',gap:9,marginTop:10},action:{height:48,borderRadius:11,alignItems:'center',justifyContent:'center',flex:1},secondaryAction:{backgroundColor:colors.surface,borderWidth:1,borderColor:colors.border},actionText:{color:colors.text,fontWeight:'700',fontSize:12},primaryActionText:{color:'#2b1228',fontWeight:'900',fontSize:12},savedMessage:{color:colors.green,textAlign:'center',marginTop:10,fontSize:12},modalShade:{flex:1,backgroundColor:'rgba(7,2,13,.72)',justifyContent:'flex-end'},sheet:{backgroundColor:'#1b1028',borderTopLeftRadius:24,borderTopRightRadius:24,borderWidth:1,borderColor:colors.border,paddingHorizontal:18,paddingTop:10,paddingBottom:24,maxHeight:'72%'},sheetHandle:{width:42,height:4,borderRadius:2,backgroundColor:colors.border,alignSelf:'center',marginBottom:14},sheetTitle:{color:colors.text,fontFamily:'Georgia',fontWeight:'800',fontSize:20,marginBottom:12},optionScroll:{maxHeight:430},option:{minHeight:48,borderBottomWidth:1,borderBottomColor:'#352242',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:12},optionActive:{backgroundColor:'#3b1f3e',borderRadius:10},optionText:{color:colors.text,fontSize:14},optionTextActive:{color:colors.pink,fontWeight:'800'},check:{color:colors.pink,fontWeight:'900'},cancel:{height:48,alignItems:'center',justifyContent:'center',marginTop:10,borderRadius:12,backgroundColor:colors.surfaceAlt},cancelText:{color:colors.text,fontWeight:'800'},
});
