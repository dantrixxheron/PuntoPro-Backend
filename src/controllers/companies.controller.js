import { supabase } from "../config/supabase.js";

// obtener una compañía por ID
export const getCompanyById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('companies').select('*').eq('id_company', id).single();

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    if (!data) {
        return res.status(404).json({ error: "Company not found" });
    }
    res.status(200).json(data);
};
// crear una nueva compañía
export const createCompany = async (req, res) => {
    const { name, address, phone, email, logo } = req.body;
    try {
        const { data, error } = await supabase.from('companies').insert({
            name,
            address,
            phone,
            email,
            logo
        }).select().single();
        if (error) {
            return res.status(400).json({ error: error.message });
        }
        res.status(201).json({ message: "Company Created", data });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// actualizar una compañía
export const updateCompany = async (req, res) => {
    const { id } = req.params;
    const { name, address, phone, email, logo } = req.body;
    const { data, error } = await supabase
        .from('companies')
        .update({ name, address, phone, email, logo })
        .eq('id_company', id)
        .single();
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ message: "Company Updated", data });
};

// eliminar una compañía
export const deleteCompany = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('companies')
        .delete()
        .eq('id_company', id);
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ message: "Company Deleted" });
};