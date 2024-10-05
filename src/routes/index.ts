import { Router } from "express";

import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift(); //el split devuelve un array, luego el shift retira el primer elemento del array y lo retorna
  return file;
};
readdirSync(PATH_ROUTER).filter((fileName) => {
  //se encarga de ver cuantos archivos hay en un directorio
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    //eliminamos los /algo en las rutas diferentes ya que este index se encargara de manejarlas con los nombres de los archivos
    //se fija que los nombres obtenidos no sean index
    import(`./${cleanName}`).then((moduleRouter) => {
      //obtiene una promesa de un modulo
      console.log(`Se esta cargando la ruta... /${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router); //se encarga de manejar las rutas, el .router es el router de cada ruta que se exporta
    });
  }
});

export { router };
