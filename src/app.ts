import express, { Application, Request, Response } from 'express';
import swaggerUi, { SwaggerOptions } from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yamljs';
import path from 'path';

const app: Application = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Swagger 설정
if (fs.existsSync(path.join(__dirname, "swagger.yaml"))) {
  const swaggerSpec: SwaggerOptions = YAML.load(path.join(__dirname, "swagger.yaml"));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
