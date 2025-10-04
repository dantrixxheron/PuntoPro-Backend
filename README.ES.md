# PuntoPro

**PuntoPro** es una herramienta digital diseñada para microempresas que desean llevar sus ventas al siguiente nivel. Ofrece una forma sencilla y accesible de gestionar ventas de manera digital, ayudando a formalizar procesos y mejorar la organización de los registros.

## 🧩 Propósito

Muchas microempresas carecen de herramientas accesibles y adaptadas a sus necesidades para llevar el control de sus ventas. PuntoPro busca resolver esta problemática proporcionando una solución sencilla, intuitiva y lista para usarse, permitiéndoles:

- Registrar ventas diarias.
- Controlar ingresos.
- Gestionar inventario.
- Generar facturas digitales.
- Acceder a reportes simples.

## 🛠 Tecnologías utilizadas en la parte de Backend

* Node.js
* Express.js
* Supabase
* Render (aún no implementada)
* invoice-generator (API de facturación)


## 🧱 Modelo de Datos
> Este diagrama fue desarrollado por el visualizador de base de datos de Supabase una vez que las tablas, llaves primarias y llaves foráneas fueron creadas.
<img width="1538" height="785" alt="supabase-schema-puntopro" src="https://github.com/user-attachments/assets/0037e824-6bfa-463e-af7d-a1fa16b2aea9" />



## 📁 Estructura de carpetas

```
PuntoPro-Backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   └── routes/
│   └── app.js
├── README.md
├── README.ES.md
├── index.js
├── LICENSE
├── package.json
```

## Futuras mejoras

- Integración con métodos de pago por tarjeta (Stripe, MercadoPago).
- Creación de cuentas múltiples por negocio.
- Creación de múltiples negocios aislados.
- Implementación de distintos idiomas.
- Aplicación de distintas reglas de distintos negocios (estéticas, veterinarias, consultorios, etc.).

---

**Desarrollado por:** Daniela Cruz
