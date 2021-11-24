import mongoose from "mongoose";

const conectarDB = async () => {
  return await mongoose
  .connect(
    // process.env.DATABASE_URL
    "mongodb+srv://root:root@udea.nl7ay.mongodb.net/ofTheFiveBack?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("conexion establecida correctamente");
    })
    .catch((error) => {
      console.log("Error realizando la conexion: ", error);
    });
};

export { conectarDB };
