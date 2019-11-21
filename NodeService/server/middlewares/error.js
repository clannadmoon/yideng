export default errorHandler = {
  error(app) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (e) {
        console.error(e);
        ctx.status = 500;
        ctx.body = "出错了";
      }
    });
  }
};
