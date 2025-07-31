import { supabase } from "../config/supabase.js";

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
    const { data, error } = await supabase.from('products').select('*');

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.status(200).json(data);
}

// Obtener un producto por ID
export const getProductById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('products').select('*').eq('id_product', id).single();
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    if (!data) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(data);
}

// Crear un nuevo producto
export const createProduct = async (req, res) => {
    const { name, cdcode, price_txin, price_txex, stock, category_id } = req.body;

    const { data, error } = await supabase
        .from('products')
        .insert([
            { name, cdcode, price_txex, price_txin, stock, category_id }
        ])
        .single();

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.status(201).json(data);
}

// Actualizar un producto
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, cdcode, price_txin, price_txex, stock, category_id } = req.body;
    const { data, error } = await supabase
        .from('products')
        .update({ name, cdcode, price_txin, price_txex, stock, category_id })
        .eq('id_product', id)
        .single();
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json(data);
}
// Eliminar un producto
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id_product', id)
        .single();
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
}
