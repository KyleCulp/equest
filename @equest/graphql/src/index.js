import { gql } from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export const RegisterDocument = gql `
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      user {
        userId
        username
        roles
      }
    }
  }
`;
/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions) {
    return ApolloReactHooks.useMutation(RegisterDocument, baseOptions);
}
//# sourceMappingURL=index.js.map