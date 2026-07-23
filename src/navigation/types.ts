import type {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AnalysisStackParamList = {
  Analyzer: undefined;
  SavedAnalyses: undefined;
};

export type DossierStackParamList = {
  Dossier: undefined;
  Discover: undefined;
  DiscoveryDetail: {id: string};
  Saved: undefined;
  CaseDetail: {id: string};
};

export type CasesStackParamList = {
  Cases: undefined;
  CaseDetail: {id: string};
  DeductionLab: undefined;
};

export type DailyStackParamList = {
  Daily: undefined;
  CompletedChallenges: undefined;
};

export type MainTabParamList = {
  Analysis: NavigatorScreenParams<AnalysisStackParamList>;
  Dossier: NavigatorScreenParams<DossierStackParamList>;
  Cases: NavigatorScreenParams<CasesStackParamList>;
  Missing: undefined;
  Daily: NavigatorScreenParams<DailyStackParamList>;
};

export type AnalysisScreenProps<RouteName extends keyof AnalysisStackParamList> =
  NativeStackScreenProps<AnalysisStackParamList, RouteName>;

export type DossierScreenProps<RouteName extends keyof DossierStackParamList> =
  NativeStackScreenProps<DossierStackParamList, RouteName>;

export type CasesScreenProps<RouteName extends keyof CasesStackParamList> =
  NativeStackScreenProps<CasesStackParamList, RouteName>;

export type DailyScreenProps<RouteName extends keyof DailyStackParamList> =
  NativeStackScreenProps<DailyStackParamList, RouteName>;
