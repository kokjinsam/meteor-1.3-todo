const mapDepsToProps = (context, actions) => {
  return {
    context: () => context,
  };
};

export default mapDepsToProps;
