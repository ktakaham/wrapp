import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** insert data into the table: "songs" */
  insert_songs?: Maybe<SongsMutationResponse>;
  /** insert a single row into the table: "songs" */
  insert_songs_one?: Maybe<Songs>;
  /** update data of the table: "songs" */
  update_songs?: Maybe<SongsMutationResponse>;
  /** update single row of the table: "songs" */
  update_songs_by_pk?: Maybe<Songs>;
  /** update multiples rows of table: "songs" */
  update_songs_many?: Maybe<Array<Maybe<SongsMutationResponse>>>;
};


/** mutation root */
export type MutationRootInsertSongsArgs = {
  objects: Array<SongsInsertInput>;
  on_conflict?: InputMaybe<SongsOnConflict>;
};


/** mutation root */
export type MutationRootInsertSongsOneArgs = {
  object: SongsInsertInput;
  on_conflict?: InputMaybe<SongsOnConflict>;
};


/** mutation root */
export type MutationRootUpdateSongsArgs = {
  _inc?: InputMaybe<SongsIncInput>;
  _set?: InputMaybe<SongsSetInput>;
  where: SongsBoolExp;
};


/** mutation root */
export type MutationRootUpdateSongsByPkArgs = {
  _inc?: InputMaybe<SongsIncInput>;
  _set?: InputMaybe<SongsSetInput>;
  pk_columns: SongsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateSongsManyArgs = {
  updates: Array<SongsUpdates>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "songs" */
  songs: Array<Songs>;
  /** fetch data from the table: "songs" using primary key columns */
  songs_by_pk?: Maybe<Songs>;
};


export type QueryRootSongsArgs = {
  distinct_on?: InputMaybe<Array<SongsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SongsOrderBy>>;
  where?: InputMaybe<SongsBoolExp>;
};


export type QueryRootSongsByPkArgs = {
  song_id: Scalars['Int'];
};

/** columns and relationships of "songs" */
export type Songs = {
  __typename?: 'songs';
  content: Scalars['String'];
  content_chord: Scalars['String'];
  song_id: Scalars['Int'];
  title: Scalars['String'];
};

/** Boolean expression to filter rows from the table "songs". All fields are combined with a logical 'AND'. */
export type SongsBoolExp = {
  _and?: InputMaybe<Array<SongsBoolExp>>;
  _not?: InputMaybe<SongsBoolExp>;
  _or?: InputMaybe<Array<SongsBoolExp>>;
  content?: InputMaybe<StringComparisonExp>;
  content_chord?: InputMaybe<StringComparisonExp>;
  song_id?: InputMaybe<IntComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "songs" */
export enum SongsConstraint {
  /** unique or primary key constraint on columns "song_id" */
  SONGS_PKEY = 'songs_pkey'
}

/** input type for incrementing numeric columns in table "songs" */
export type SongsIncInput = {
  song_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "songs" */
export type SongsInsertInput = {
  content?: InputMaybe<Scalars['String']>;
  content_chord?: InputMaybe<Scalars['String']>;
  song_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "songs" */
export type SongsMutationResponse = {
  __typename?: 'songs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Songs>;
};

/** on_conflict condition type for table "songs" */
export type SongsOnConflict = {
  constraint: SongsConstraint;
  update_columns?: Array<SongsUpdateColumn>;
  where?: InputMaybe<SongsBoolExp>;
};

/** Ordering options when selecting data from "songs". */
export type SongsOrderBy = {
  content?: InputMaybe<OrderBy>;
  content_chord?: InputMaybe<OrderBy>;
  song_id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: songs */
export type SongsPkColumnsInput = {
  song_id: Scalars['Int'];
};

/** select columns of table "songs" */
export enum SongsSelectColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CONTENT_CHORD = 'content_chord',
  /** column name */
  SONG_ID = 'song_id',
  /** column name */
  TITLE = 'title'
}

/** input type for updating data in table "songs" */
export type SongsSetInput = {
  content?: InputMaybe<Scalars['String']>;
  content_chord?: InputMaybe<Scalars['String']>;
  song_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "songs" */
export type SongsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: SongsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SongsStreamCursorValueInput = {
  content?: InputMaybe<Scalars['String']>;
  content_chord?: InputMaybe<Scalars['String']>;
  song_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** update columns of table "songs" */
export enum SongsUpdateColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CONTENT_CHORD = 'content_chord',
  /** column name */
  SONG_ID = 'song_id',
  /** column name */
  TITLE = 'title'
}

export type SongsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<SongsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SongsSetInput>;
  /** filter the rows which have to be updated */
  where: SongsBoolExp;
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "songs" */
  songs: Array<Songs>;
  /** fetch data from the table: "songs" using primary key columns */
  songs_by_pk?: Maybe<Songs>;
  /** fetch data from the table in a streaming manner: "songs" */
  songs_stream: Array<Songs>;
};


export type SubscriptionRootSongsArgs = {
  distinct_on?: InputMaybe<Array<SongsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SongsOrderBy>>;
  where?: InputMaybe<SongsBoolExp>;
};


export type SubscriptionRootSongsByPkArgs = {
  song_id: Scalars['Int'];
};


export type SubscriptionRootSongsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<SongsStreamCursorInput>>;
  where?: InputMaybe<SongsBoolExp>;
};

export type GetSongQueryVariables = Exact<{
  song_id: Scalars['Int'];
}>;


export type GetSongQuery = { __typename?: 'query_root', songs: Array<{ __typename?: 'songs', song_id: number, title: string, content: string, content_chord: string }> };

export type GetSongListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSongListQuery = { __typename?: 'query_root', songs: Array<{ __typename?: 'songs', song_id: number, title: string }> };

export type InsertSongMutationVariables = Exact<{
  song_id: Scalars['Int'];
  content: Scalars['String'];
  content_chord: Scalars['String'];
  title: Scalars['String'];
}>;


export type InsertSongMutation = { __typename?: 'mutation_root', insert_songs_one?: { __typename?: 'songs', content: string, content_chord: string, song_id: number, title: string } | null };


export const GetSongDocument = gql`
    query GetSong($song_id: Int!) {
  songs(where: {song_id: {_eq: $song_id}}) {
    song_id
    title
    content
    content_chord
  }
}
    `;

/**
 * __useGetSongQuery__
 *
 * To run a query within a React component, call `useGetSongQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongQuery({
 *   variables: {
 *      song_id: // value for 'song_id'
 *   },
 * });
 */
export function useGetSongQuery(baseOptions: Apollo.QueryHookOptions<GetSongQuery, GetSongQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongQuery, GetSongQueryVariables>(GetSongDocument, options);
      }
export function useGetSongLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongQuery, GetSongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongQuery, GetSongQueryVariables>(GetSongDocument, options);
        }
export type GetSongQueryHookResult = ReturnType<typeof useGetSongQuery>;
export type GetSongLazyQueryHookResult = ReturnType<typeof useGetSongLazyQuery>;
export type GetSongQueryResult = Apollo.QueryResult<GetSongQuery, GetSongQueryVariables>;
export const GetSongListDocument = gql`
    query GetSongList {
  songs(order_by: {song_id: asc}) {
    song_id
    title
  }
}
    `;

/**
 * __useGetSongListQuery__
 *
 * To run a query within a React component, call `useGetSongListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSongListQuery(baseOptions?: Apollo.QueryHookOptions<GetSongListQuery, GetSongListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongListQuery, GetSongListQueryVariables>(GetSongListDocument, options);
      }
export function useGetSongListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongListQuery, GetSongListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongListQuery, GetSongListQueryVariables>(GetSongListDocument, options);
        }
export type GetSongListQueryHookResult = ReturnType<typeof useGetSongListQuery>;
export type GetSongListLazyQueryHookResult = ReturnType<typeof useGetSongListLazyQuery>;
export type GetSongListQueryResult = Apollo.QueryResult<GetSongListQuery, GetSongListQueryVariables>;
export const InsertSongDocument = gql`
    mutation InsertSong($song_id: Int!, $content: String!, $content_chord: String!, $title: String!) {
  insert_songs_one(
    object: {song_id: $song_id, content: $content, content_chord: $content_chord, title: $title}
    on_conflict: {constraint: songs_pkey, update_columns: [content, title, content_chord]}
  ) {
    content
    content_chord
    song_id
    title
  }
}
    `;
export type InsertSongMutationFn = Apollo.MutationFunction<InsertSongMutation, InsertSongMutationVariables>;

/**
 * __useInsertSongMutation__
 *
 * To run a mutation, you first call `useInsertSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSongMutation, { data, loading, error }] = useInsertSongMutation({
 *   variables: {
 *      song_id: // value for 'song_id'
 *      content: // value for 'content'
 *      content_chord: // value for 'content_chord'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useInsertSongMutation(baseOptions?: Apollo.MutationHookOptions<InsertSongMutation, InsertSongMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertSongMutation, InsertSongMutationVariables>(InsertSongDocument, options);
      }
export type InsertSongMutationHookResult = ReturnType<typeof useInsertSongMutation>;
export type InsertSongMutationResult = Apollo.MutationResult<InsertSongMutation>;
export type InsertSongMutationOptions = Apollo.BaseMutationOptions<InsertSongMutation, InsertSongMutationVariables>;