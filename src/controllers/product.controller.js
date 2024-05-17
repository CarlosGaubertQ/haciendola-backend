import { Product } from "../models/Product.js";


export const getProduct = async (req, res) =>{
    const {handle} = req.params
    try {
        const product = await Product.findByPk(handle)
        res.json(product)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}


export const getProducts = async (req, res) =>{
    try {
        const product = await Product.findAll()
        res.json(product)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}


export const createProduct = async (req, res ) => {
    const {Handle, Title, Description, SKU, Grams, Stock, Price, Compare_Price, Barcode} = req.body
    console.log(req.body)
    try {
        const newProduct = await Product.create({
            'Handle': Handle,
            'Title': Title,
            'Description':Description,
            'SKU': SKU,
            'Grams': Grams,
            'Stock': Stock,
            'Price': Price,
            'Compare_Price': Compare_Price,
            'Barcode': Barcode
        })

        

        res.send('Create Product')
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateProduct = async (req, res ) => {
    const {handle} = req.params
    const {  Title, Description, SKU, Grams, Stock, Price, Compare_Price, Barcode } = req.body

    try {
        const productFind = await Product.findByPk(handle)
        productFind.Title = Title
        productFind.Description = Description
        productFind.SKU = SKU
        productFind.Grams = Grams
        productFind.Stock = Stock
        productFind.Price = Price
        productFind.Compare_Price = Compare_Price
        productFind.Barcode = Barcode
        
        productFind.save()
        res.send('Product update')

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteProduct = async (req, res ) => {
    const {handle} = req.params
    try {
        await Product.destroy({
            where:{
                Handle: handle
            }
        })
        res.send("Product deleted")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}