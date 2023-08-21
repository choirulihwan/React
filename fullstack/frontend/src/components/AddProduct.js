import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../global'
import { NumericFormat } from 'react-number-format';

const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const navigate = useNavigate()

    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post(url, {
            title: title,
            price: price
        })
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Name</label>
                    <input type="text" className="input" value={ title } onChange={ (e) => setTitle(e.target.value) } placeholder="nama" />
                </div>

                <div className="field">
                    <label className="label">Price</label>                    
                    <NumericFormat 
                        thousandSeparator="." 
                        decimalSeparator=','                         
                        allowNegative={false}
                        prefix={'Rp. '}
                        value={ price } 
                        // onChange={ (e) => setPrice(e.target.value) } 
                        placeholder="harga"
                        className="input has-text-right"
                        onValueChange={(values) => {
                            const { floatValue } = values;
                            setPrice(floatValue);                                                        
                        }} />
                </div>

                <div className="field">
                    <button className="button is-primary">Save</button>&nbsp;
                    <button className="button is-warning" onClick={() => navigate("/")}>Cancel</button>
                </div>
            </form>
        </div>
    )


};

export default AddProduct;