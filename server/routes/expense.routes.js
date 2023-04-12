const StoreController = require('../controllers/store.controller');

module.exports = app => {
    app.get('/', ExpenseController.findAllStores);
    app.get('/api/expenses/:id', ExpenseController.findOneStore);
    app.post('/', ExpenseController.createStore);
    // app.put('/api/stores/:id', ExpenseController.updateStore);
    app.patch('/api/stores/:id', ExpenseController.updateStore);
    app.delete('/api/stores/:id', ExpenseController.deleteStore);
};