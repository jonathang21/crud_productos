import React,{Component} from 'react';
import {AppContext} from '../Context';

class AddItem extends Component {
    static contextType = AppContext;

    insertItem= (event) => {
        this.context.insertItem(
            event,
            this.nombre_producto.value,
            this.referencia.value,
            this.precio.value,
            this.peso.value,
            this.categoria.value,
            this.stock.value
        );
    }

    render(){
        return (
            <form onSubmit={this.insertItem}>
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Nombre producto: </label>
                    <input type="text" name="nombre_producto" ref={(val) => this.nombre_producto = val} className="form-control" placeholder="Nombre del producto"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Referencia: </label>
                    <input type="text" name="referencia" ref={(val) => this.referencia = val} className="form-control" placeholder="Ingrese la referencia"/>
                </div>
                
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Precio: </label>
                    <input type="number" name="precio" ref={(val) => this.precio = val} className="form-control" placeholder="Ingrese un precio"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Peso: </label>
                    <input type="number" name="peso" ref={(val) => this.peso = val} className="form-control" placeholder="Ingrese el peso"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Categoria:</label>
                    <input type="text" name="categoria" ref={(val) => this.categoria = val} className="form-control" placeholder="Ingrese la categoria"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Stock: </label>
                    <input type="number" name="stock" ref={(val) => this.stock = val} className="form-control" placeholder="Ingrese un stock"/>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </div>
            </div>
        </form>  
        );
    }
}
export default AddItem;