import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yamljs';
import path from 'path';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Swagger 설정
if (fs.existsSync(path.join(__dirname, "swagger.yaml"))) {
  const swaggerSpec = YAML.load(path.join(__dirname, "swagger.yaml"));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
