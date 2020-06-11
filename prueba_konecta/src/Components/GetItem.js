import React, {Component} from 'react';
import {AppContext} from '../Context';
class GetItems extends Component{
    static contextType = AppContext;

    componentDidMount(){
        this.context.get_items();
    }

    handleUpdate = (id) => {
        this.context.handleUpdate(
            id,
            this.name.value,
            this.refer.value,
            this.price.value,
            this.weight.value,
            this.category.value,
            this.stock_item.value,
            this.date.value
        );
    }

    render(){
        let allItems;
        let mainData;
        allItems = this.context.all_items.map(({
            id,
            nombre_producto,
            referencia,
            precio,
            peso,
            categoria,
            stock,
            fecha_creacion,
            isEditing   
        }) => {
            return isEditing === true ? (
                <tr key={id}>
                <td><input className="form-control" type="text" ref={(item) => this.name = item} defaultValue={nombre_producto}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.refer = item} defaultValue={referencia}/></td>
                <td><input className="form-control" type="number" ref={(item) => this.price = item} defaultValue={precio}/></td>
                <td><input className="form-control" type="number" ref={(item) => this.weight = item} defaultValue={peso}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.category = item} defaultValue={categoria}/></td>
                <td><input className="form-control" type="number" ref={(item) => this.stock_item = item} defaultValue={stock}/></td>
                <td><input readonly="radonly" className="form-control" type="text" ref={(item) => this.date = item} defaultValue={fecha_creacion}/></td>
                <td>
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id)}>Guardar</button>
                    <button onClick={() => this.context.cancelEdit(id)} className="btn btn-light">Cancelar</button>
                </td>
            </tr>
            ) : (
                <tr key={id}>
                    <td>{nombre_producto}</td>
                    <td>{referencia}</td>
                    <td>{precio}</td>
                    <td>{peso}</td>
                    <td>{categoria}</td>
                    <td>{stock}</td>
                    <td>{fecha_creacion}</td>
                    <td>
                        <button className="btn btn-dark mr-2" onClick={() => this.context.editMode(id)}>Editar</button>
                        <button onClick={() => this.context.handleDelete(id)} className="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            );
        });

        if(this.context.all_items.length > 0){
            mainData = (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Nombre producto</th>
                            <th>Referencia</th>
                            <th>Precio</th>
                            <th>Peso</th>
                            <th>Categoria</th>
                            <th>Stock</th>
                            <th>Fecha creacion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allItems}
                    </tbody>
                </table>
            );
        }
        else{
            mainData = (
                <div className="alert alert-light" role="alert">
                    <h4 className="alert-heading">No se encontraron productos!</h4>
                    <hr/>
                    <p>Por favor inserte algunos productos.</p>
                </div>
            );
        }
        return(
            <>
            {mainData}
            </>
        );
    }

}
export default GetItems;