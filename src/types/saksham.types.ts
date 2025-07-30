export interface LangField {
  en: string;
  hi: string;
}

export interface SakshamFormData {
  id: string;
  name: LangField;
  description: LangField;
  benefits: LangFieldArray;
  eligibility: LangFieldArray;
  contact: {
    phone: string[];
    email: string;
    office: LangField;
  };
  documents: LangFieldArray;
  website: string;
  status: string;
  lastUpdated: string;
  notices: LangFieldArray;
}

export interface LangFieldArray {
  en: string[];
  hi: string[];
}
