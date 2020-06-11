import React from 'react';
import {Provider} from './Context';
import AllItems from './Components/GetItem';
import AddItem from './Components/AddItem';
import Actions from './Actions/Actions';

class App extends Actions {
  render(){
    const contextValue = {
        all_items:this.state.items,
        get_items:this.fetchItems,
        editMode:this.editMode,
        cancelEdit:this.cancelEdit,
        handleUpdate:this.handleUpdate,
        handleDelete:this.handleDelete,
        insertItem:this.insertItem
    }
    return (
      <Provider value={contextValue}>
        <div className="container-fluid bg-light">
              <div className="container p-5">
                  <div className="card shadow-sm">
                      <h1 className="card-header text-center text-uppercase text-muted">Aplicacion para insertar productos</h1>
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-12">
                                  <AddItem/>
                              </div>
                              <div className="col-md-12">
                                <AllItems/>
                              </div>
                          </div>
                      </div>
                  </div>
      
              </div>
              </div>
      </Provider>
    );
  }
}

export default App;