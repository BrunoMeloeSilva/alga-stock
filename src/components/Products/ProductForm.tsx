import React, { useState } from 'react'
import Button from '../shared/Button/Button'
import Form from '../shared/Form/Form'
import Input from '../shared/Input/Input'

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

const ProductsForm = () => {

    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return <Form title="Product form" onSubmit={() => console.log(form)}>
        <Input
            onChange={handleInputChange}
            name="name"
            label="Name"
            placeholder="Ex.: Biscoito"
            required/>
          <Input
            onChange={handleInputChange}
            label="Price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            placeholder="Ex.: 1.24"
            required/>
          <Input
            onChange={handleInputChange}
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