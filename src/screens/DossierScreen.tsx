import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Screen} from '../components/Screen';
import {AnimatedEntrance} from '../components/AnimatedEntrance';
import {Card, GradientButton, Title} from '../components/ui';
import {facts} from '../data/facts';
import {colors} from '../theme/colors';
export function DossierScreen() {
  const [tab, setTab] = useState<'facts' | 'notes'>('facts');
  const [notes, setNotes] = useState<{title: string; body: string}[]>([]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const save = () => {
    if (title.trim()) {
      setNotes([...notes, {title, body}]);
      setTitle('');
      setBody('');
      setModal(false);
    }
  };
  return (
    <Screen>
      <Title>Fact Dossier</Title>
      <View style={s.tabs}>
        <Pressable
          onPress={() => setTab('facts')}
          style={[s.tab, tab === 'facts' && s.active]}>
          <Text style={s.tabText}>Fact Dossiers</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab('notes')}
          style={[s.tab, tab === 'notes' && s.active]}>
          <Text style={s.tabText}>My Notes</Text>
        </Pressable>
      </View>
      {tab === 'facts' ? (
        facts.map((x, i) => (
          <AnimatedEntrance key={x.title} delay={i * 60}>
            <Card style={s.card}>
              <Text style={s.category}>{x.category}</Text>
              <Text style={s.title}>{x.title}</Text>
              <Text style={s.body}>{x.body}</Text>
              <Text style={s.source}>Source · {x.source}</Text>
            </Card>
          </AnimatedEntrance>
        ))
      ) : (
        <>
          {notes.length === 0 && (
            <View style={s.empty}>
              <Text style={s.cup}>🧁</Text>
              <Text style={s.title}>No notes yet</Text>
              <Text style={s.body}>
                Jot down your own research and observations.
              </Text>
            </View>
          )}
          {notes.map((n, i) => (
            <Card key={i} style={s.card}>
              <Text style={s.title}>{n.title}</Text>
              <Text style={s.body}>{n.body}</Text>
              <Pressable
                onPress={() =>
                  Alert.alert(
                    'Delete note?',
                    'This note will be permanently removed.',
                    [
                      {text: 'Cancel'},
                      {
                        text: 'Delete',
                        style: 'destructive',
                        onPress: () =>
                          setNotes(notes.filter((_, j) => j !== i)),
                      },
                    ],
                  )
                }>
                <Text style={s.delete}>Delete</Text>
              </Pressable>
            </Card>
          ))}
          <GradientButton
            label="＋ Research Notes"
            onPress={() => setModal(true)}
          />
        </>
      )}
      <Modal
        visible={modal}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setModal(false)}>
        <KeyboardAvoidingView
          style={s.overlay}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={s.sheet}>
            <Text style={s.sheetTitle}>New research note</Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder="Note title"
              placeholderTextColor={colors.muted}
              style={s.input}
            />
            <TextInput
              value={body}
              onChangeText={setBody}
              multiline
              placeholder="Write your observation..."
              placeholderTextColor={colors.muted}
              style={[s.input, s.noteInput]}
            />
            <GradientButton label="Save note" onPress={save} />
            <Pressable onPress={() => setModal(false)}>
              <Text style={s.cancel}>Cancel</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </Screen>
  );
}
const s = StyleSheet.create({
  noteInput: {height: 110},
  tabs: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 15,
    padding: 4,
    marginVertical: 20,
  },
  tab: {flex: 1, padding: 12, borderRadius: 11, alignItems: 'center'},
  active: {backgroundColor: colors.pink},
  tabText: {color: colors.text, fontWeight: '700'},
  card: {marginBottom: 12},
  category: {
    alignSelf: 'flex-start',
    color: colors.text,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 11,
  },
  title: {
    fontFamily: 'Georgia',
    color: colors.text,
    fontWeight: '700',
    fontSize: 19,
    marginTop: 13,
  },
  body: {color: colors.muted, lineHeight: 20, marginTop: 10},
  source: {
    color: colors.purple,
    fontSize: 11,
    fontWeight: '700',
    marginTop: 16,
  },
  empty: {alignItems: 'center', paddingVertical: 45},
  cup: {fontSize: 64},
  delete: {color: colors.red, fontWeight: '700', marginTop: 14},
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.overlay,
  },
  sheet: {
    width: '100%',
    maxWidth: 430,
    backgroundColor: '#190c27',
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 22,
    paddingBottom: 14,
  },
  sheetTitle: {
    fontFamily: 'Georgia',
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    color: colors.text,
    padding: 14,
    marginBottom: 12,
    textAlignVertical: 'top',
  },
  cancel: {color: colors.muted, textAlign: 'center', padding: 14},
});
