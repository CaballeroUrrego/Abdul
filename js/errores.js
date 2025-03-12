// Aplicativo de Transporte de Domicilios Locales de Comidas Rápidas 
// Datos de ejemplo 
const restaurants = [ 
    { id: 1, name: "Burger King", menu: ["Whopper", "Cheeseburger", "Fries"] }, 
    { id: 2, name: "McDonald's", menu: ["Big Mac", "McChicken", "McFlurry"] }, 
    { id: 3, name: "KFC", menu: ["Bucket Chicken", "Zinger Burger", "Coleslaw"] } 
]; 
const orders = []; 
// Función para mostrar el menú de un restaurante 
function showMenu(restaurantId) { 
    const restaurant = restaurants.find(r => r.id = restaurantId); 
    if (restaurant) { 
        console.log(`Menú de ${restaurant.name}:`); 
        restaurant.menu.forEach(item => console.log(item)); 
    } else { 
        console.log("Restaurante no encontrado."); 
    } 
} 
// Función para realizar un pedido 
function placeOrder(restaurantId, items, address) { 
    const restaurant = restaurants.find(r => r.id == restaurantId); 
    if (!restaurant) { 
        console.log("Restaurante no encontrado."); 
        return;    } 
    const order = { 
        id: orders.length + 1, 
        restaurant: restaurant.name, 
        items: items, 
        address: address, 
        status: "Pendiente" 
    }; 
    orders.push(order); 
    console.log(`Pedido realizado con ID: ${order.id}`); 
} 
// Función para actualizar el estado de un pedido 
function updateOrderStatus(orderId, status) { 
    const order = orders.find(o => o.id === orderId); 
    if (order) { 
        order.status = status; 
        console.log(`Estado del pedido ${orderId} actualizado a: ${status}`); 
    } else { 
        console.log("Pedido no encontrado."); 
    } 
} 
// Función para mostrar todos los pedidos 
function showOrders() { 
    console.log("Lista de pedidos:"); 
    orders.forEach(order => { 
        console.log(`ID: ${order.id}, Restaurante: ${order.restaurant}, Items: 
${order.items.join(", ")}, Dirección: ${order.address}, Estado: ${order.status}`); 
    }); 
} 
// Ejemplos de uso 
showMenu(1); 
placeOrder(1, ["Whopper", "Fries"], "Calle 123"); 
placeOrder(2, ["Big Mac"], "Avenida 456"); 
updateOrderStatus(1, "En camino"); 
showOrders();