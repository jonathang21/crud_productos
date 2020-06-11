import React from 'react';
import Axios from 'axios';
class Actions extends React.Component {
    state = {
        items:[]
    }

    // Fetch productos de base de datos
    fetchItems = () => {
        Axios.post('http://localhost:8585/php-react/all-item.php')
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    items:data.items
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

     // modo editar
     editMode = (id) => {
        let items = this.state.items.map(item => {
            if(item.id === id){
                item.isEditing = true;
                return item;
            }
            item.isEditing = false;
            return item;
        });

        this.setState({
            items
        });
    }

    //cancelar modo editar
    cancelEdit = (id) => {
        let items = this.state.items.map(item => {
            if(item.id === id){
                item.isEditing = false;
                return item;
            }
            return item
            
        });
        this.setState({
            items
        });
    }

    // actualizar producto
    handleUpdate = (
        id,
        nombre_producto,
        referencia,
        precio,
        peso,
        categoria,
        stock
    ) => {
        Axios.post('http://localhost:8585/php-react/update-item.php',
        {
            id:id,
            nombre_producto:nombre_producto,
            referencia:referencia,
            precio:precio,
            peso:peso,
            categoria:categoria,
            stock:stock

        })
        .then(({data}) => {
            console.log(data)
            if(data.success === 1){
                let items = this.state.items.map(item => {
                    if(item.id === id){
                        item.nombre_producto = nombre_producto;
                        item.referencia = referencia;
                        item.precio = precio;
                        item.peso = peso;
                        item.categoria = categoria;
                        item.stock = stock;
                        item.isEditing = false;
                        return item;
                    }
                    return item; 
                });
                this.setState({
                    items
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }


    // Eliminar producto
    handleDelete = (id) => {
        let deleteItem = this.state.items.filter(item => {
            return item.id !== id;
        });
        
        Axios.post('http://localhost:8585/php-react/delete-item.php',{
            id:id
        })
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    items:deleteItem
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    // Insertar producto
    insertItem = (
            event,
            nombre_producto,
            referencia,
            precio,
            peso,
            categoria,
            stock
    ) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost:8585/php-react/add-item.php',{
            nombre_producto:nombre_producto,
            referencia:referencia,
            precio:precio,
            peso:peso,
            categoria:categoria,
            stock:stock
        })
        .then(function ({data}) {
            if(data.success === 1){
                this.setState({
                    items:[
                        {
                            "id":data.id,
                            "nombre_producto":nombre_producto,
                            "referencia":referencia,
                            "precio":precio,
                            "peso":peso,
                            "categoria":categoria,
                            "stock":stock,
                            "fecha_creacion":data.fecha_creacion
                        },
                        ...this.state.items
                    ]
                });
                event.target.reset();
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default Actions;