// src/controllers/categories.controller.js
import { supabase } from "../config/supabase.js";

// Obtener todas las categorías
export const getAllCategories = async (req, res) => {
  const { data, error } = await supabase.from('categories').select('*');

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json(data);
};

// Crear una nueva categoría
export const createCategory = async (req, res) => {
  const { name } = await req.body;

  try{
    const data = await supabase.from('categories').insert({
      name
    })
    res.status(201).json({message: "Category Created",data});
  }catch (error) {
    res.status(400).json({ error: error.message });
  }

};

//updateCategory
export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const { data, error } = await supabase
      .from('categories')
      .update({ name })
      .eq('id_category', id);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: "Category Updated", data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//deleteCategory
export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('categories')
      .delete()
      .eq('id_category', id);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: "Category Deleted", data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
