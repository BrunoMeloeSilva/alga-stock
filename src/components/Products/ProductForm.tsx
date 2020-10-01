import React, { useState } from 'react'
import Button from '../shared/Button/Button'
import Form from '../shared/Form/Form'
import Input from '../shared/Input/Input'

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

export interface ProductCreator {
    name: string
    price: number
    stock: number
}

declare interface ProductFormProps {
    onSubmit: (product: ProductCreator) => void
}

const ProductsForm: React.FC<ProductFormProps> = (props) => {

    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleFormSubmit = () => {
        const productDto = {
            name: String(form.name),
            price: parseFloat(form.price),
            stock: Number(form.stock)
        }
        props.onSubmit(productDto)
        setForm(initialFormState)
    }

    return <Form title="Product form" onSubmit={handleFormSubmit}>
        <Input
            onChange={handleInputChange}
            value={form.name}
            name="name"
            label="Name"
            placeholder="Ex.: Biscoito"
            required/>
          <Input
            onChange={handleInputChange}
            value={form.price}
            label="Price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            placeholder="Ex.: 1.24"
            required/>
          <Input
            onChange={handleInputChange}
            value={form.stock}
            label="Stock"
            name="stock"
            type="number"
            min="0"
            placeholder="Ex.: 234"
            required/>
            <Button>Submit</Button>
    </Form>
}

export default ProductsForm