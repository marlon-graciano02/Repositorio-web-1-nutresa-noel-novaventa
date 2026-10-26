const URL_API = "https://6ada65777512f497b3ffe92d.mockapi.io/api/v1/productos";

export const productoServicio = {
  listarProductos: async function () {
    const respuesta = await fetch(URL_API);
    if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
    return await respuesta.json();
  },

  consultarRecetaPorId: async function (id) {
    const respuesta = await fetch(`${URL_API}/${id}`);
    if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
    return await respuesta.json();
  },

  actualizarReceta: async function (id, datos) {
    const respuesta = await fetch(`${URL_API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
    if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
    return await respuesta.json();
  }
};

export const recetaServicio = { actualizarReceta: productoServicio.actualizarReceta };