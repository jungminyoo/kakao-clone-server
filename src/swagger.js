import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
const options = {
  swaggerDefinition: {
    info: {
      title: "Kakao Clone Server",
      version: "1.0.0",
      description: "Kakao Clone Server API",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
      {
        url: "https://kakao-clone-server.herokuapp.com/",
      },
    ],
  },
  apis: ["./src/routers/*", "./src/models/*.js"],
};
const specs = swaggerJsdoc(options);
module.exports = { swaggerUi, specs };
