export interface NYTPerson {
  firstname: string;
  middlename: string | null;
  lastname: string;
  qualifier: string | null;
  title: string | null;
  organization: string | null;
  rank: number;
  role: string;
}

export interface NYTByline {
  original: string;
  person: NYTPerson[];
  organization: string | null;
}

export interface NYTKeyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface NYTHeadline {
  main: string;
  kicker: string | null;
  content_kicker: string | null;
  print_headline: string | null;
  name: string | null;
  seo: string | null;
  sub: string | null;
}

export interface NYTLegacy {
  xlarge?: string;
  xlargeheight?: number;
  xlargewidth?: number;
}

export interface NYTMultimedia {
  rank: number;
  subtype: string;
  caption: string | null;
  credit: string | null;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy?: NYTLegacy;
  subType?: string; // иногда дублируется с subtype
  crop_name?: string;
}

export interface NYTArticle {
  abstract: string;
  byline: NYTByline;
  document_type: string;
  headline: NYTHeadline;
  keywords: NYTKeyword[];
  lead_paragraph: string;
  multimedia: NYTMultimedia[];
  news_desk: string;
  print_page: string | null;
  print_section: string | null;
  pub_date: string; // ISO 8601
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string | null;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
}

export interface NYTRequest {
    copyright: string
    response: {
        docs: NYTArticle[],
        meta: {
            hits: number
        }
    }
}