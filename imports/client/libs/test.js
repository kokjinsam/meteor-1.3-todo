const testMiddleware = {
  moduleWillLoad(module) {
    console.log(this);
    console.log(module);
  },
  moduleWillInit() {
    console.log(this);
  },
};

export default testMiddleware;
