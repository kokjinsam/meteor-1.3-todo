import gql from 'graphql-tag';

export default function apollo(Client) {
  return {
    mutateWith(options, cb) {
      const {
        mutation,
        ...others,
      } = options;

      const taggedMutation = gql`${mutation}`;

      Client.mutate({
        mutation: taggedMutation,
        ...others,
      }).then((graphQLResult) => {
        const { errors, data } = graphQLResult;
        cb(errors, data);
      }).catch((ex) => {
        cb(ex);
      });
    },
  };
}
