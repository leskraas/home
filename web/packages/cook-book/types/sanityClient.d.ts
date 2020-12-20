export interface SanityDocument {
  _id: string;
  _type: string;
}

interface SanityConfig {
  projectId: string;
  dataset: string;
  token?: string;
  useCdn: boolean;
}

// TODO: Add Listen with Observable
interface SanityClient {
  getDocument<T>(doc: string): Promise<T>;
  fetch<T>(query: string, params: object): Promise<T>;
  listen<any>(query: string, params: object): any;
  create<T>(document: T & SanityDocument): Promise<T & SanityDocument>
  createOrReplace<T>(document: T & SanityDocument): Promise<T & SanityDocument>;
  createIfNotExists<T>(document: T & SanityDocument): Promise<T & SanityDocument>;
  patch(docId: string): Promise<any>;
  config(): SanityConfig;
}

declare module '@sanity/client' {
  export default function sanityClient(config: SanityConfig): SanityClient;
}
