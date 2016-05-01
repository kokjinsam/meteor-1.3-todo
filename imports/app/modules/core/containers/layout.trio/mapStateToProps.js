const mapStateToProps = ({ context }, onData) => {
  const { Store } = context();

  const unsubscribe = Store.subscribe(() => {
    const isDrawerOpen = Store.getState().layout.isDrawerOpen;
    const isCartOpen = Store.getState().layout.isCartOpen;
    const isBodyLocked = isDrawerOpen || isCartOpen;
    onData(null, { isBodyLocked });
  });

  const isDrawerOpen = Store.getState().layout.isDrawerOpen;
  const isCartOpen = Store.getState().layout.isCartOpen;
  const isBodyLocked = isDrawerOpen || isCartOpen;
  onData(null, { isBodyLocked });

  const cleanUp = () => {
    unsubscribe();
  };

  return cleanUp;
};

export default mapStateToProps;
