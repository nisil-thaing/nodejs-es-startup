import {
  app,
  connectToServer,
  dbConnect
} from '@app/configs';

(async function () {
  try {
    const message = await dbConnect();
    console.log(message);
    connectToServer();
  } catch (error) {
    throw new Error(error);
  }
})();

export default app;
