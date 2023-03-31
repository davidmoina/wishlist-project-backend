import app from './server';
import config from './config/config'

app.listen(config.app.PORT, () => {
  console.log(`Server is running on port: ${config.app.PORT}`);
  
})