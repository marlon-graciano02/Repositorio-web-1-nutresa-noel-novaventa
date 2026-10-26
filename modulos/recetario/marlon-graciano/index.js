import { productoServicio } from './servicio.js';

const selectProducto = document.getElementById('selectProducto') || document.getElementById('producto') || document.querySelector('select');

async function cargarProductos() {
  if (!selectProducto) return; // si no existe, no rompe
  const productos = await productoServicio.listarProductos();
  selectProducto.innerHTML = '<option value="">Seleccione producto</option>';
  productos.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    selectProducto.appendChild(opt);
  });
}

async function cargaPrevia() {
  const id = new URLSearchParams(window.location.search).get('id') || "1";
  const receta = await productoServicio.consultarRecetaPorId(id);
  console.log("Receta cargada:", receta);
}

cargarProductos();
cargaPrevia();
