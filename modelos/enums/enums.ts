enum enumRol {
  ESTUDIANTE = "ESTUDIANTE",
  LIDER = "LIDER",
  ADMINISTRADOR = "ADMINISTRADOR",
}



enum enumEstadoUsuario {
  PENDIENTE = 'PENDIENTE',
  AUTORIZADO = 'AUTORIZADO',
  NO_AUTORIZADO = 'NO_AUTORIZADO',
}


enum enumEstadoProyecto {
  ACTIVO = "ACTIVO",
  INACTIVO = "INACTIVO",
}


enum enumFase {
  INICIADO = "INICIADO",
  DESARROLLO = "DESARROLLO",
  TERMINADO = "TERMINADO",
  NULO = "",
}


enum enumTipoObjetivo {
  GENERAL = "GENERAL",
  ESPECIFICO = "ESPECIFICO",
}

enum enumEstadoInscripcion {
  aceptada = "Aceptada",
  rechazada = "Rechazada",
}

export {
  enumRol,
  enumEstadoUsuario,
  enumEstadoProyecto,
  enumFase,
  enumTipoObjetivo,
  enumEstadoInscripcion,
};
